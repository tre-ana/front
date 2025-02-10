import React, { createContext, useState, useEffect, useContext } from 'react'
import {
  getUserFavorites,
  saveKeyword,
  deleteKeyword,
  getReportsForKeyword,
  updateReportViewed,
  deleteReport,
} from '../services/Api'
import { AuthContext } from './AuthContext'

export const FavoritesContext = createContext()

export const FavoritesProvider = ({ children }) => {
  const { auth } = useContext(AuthContext)
  const [favorites, setFavorites] = useState([])
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFavoritesAndReports = async () => {
      if (auth.isAuthenticated) {
        setLoading(true) // 데이터 로딩 시작
        try {
          const favoriteData = await getUserFavorites()
          setFavorites(favoriteData)

          // 키워드별로 리포트를 가져옴
          const reportDataPromises = favoriteData.map((favorite) =>
            getReportsForKeyword(favorite.keyword),
          )
          const allReports = await Promise.all(reportDataPromises)

          const combinedReports = allReports.flat()
          setReports(combinedReports)
        } catch (error) {
          console.error('Error fetching favorites or reports:', error.message)
        } finally {
          setLoading(false) // 데이터 로딩 종료
        }
      }
    }

    fetchFavoritesAndReports()
  }, [auth.token, auth.isAuthenticated])

  // 키워드 추가
  const addKeyword = async (keyword) => {
    setLoading(true)
    try {
      const response = await saveKeyword(keyword)
      setFavorites((prevFavorites) => [...prevFavorites, { keyword }])
      console.log('키워드 추가 성공')
    } catch (error) {
      console.error('Error adding keyword:', error.message)
    } finally {
      setLoading(false)
    }
  }

  // 키워드 삭제
  const removeKeyword = async (keyword) => {
    setLoading(true)
    try {
      await deleteKeyword(keyword)
      setFavorites((prevFavorites) =>
        prevFavorites.filter((favorite) => favorite.keyword !== keyword),
      )
      setReports((prevReports) =>
        prevReports.filter((report) => report.keyword !== keyword),
      )
      console.log('키워드 삭제 성공')
    } catch (error) {
      console.error('Error removing keyword:', error.message)
    } finally {
      setLoading(false)
    }
  }

  // 리포트의 'isViewed' 상태 업데이트
  const updateReportViewStatus = async (
    reportId,
    isViewed,
    keyword,
    reportDate,
    keywordId,
    reportContent,
  ) => {
    setLoading(true)
    try {
      const updatedReport = await updateReportViewed(
        reportId,
        isViewed,
        keyword,
        reportDate,
        keywordId,
        reportContent,
      )
      setReports((prevReports) =>
        prevReports.map((report) =>
          report.reportId === reportId ? updatedReport : report,
        ),
      )
      console.log('읽음 여부 업데이트 완료')
      console.log(reports)
    } catch (error) {
      console.error('Error updating report viewed status:', error.message)
    } finally {
      setLoading(false)
    }
  }

  // 리포트 삭제
  const removeReport = async (reportId) => {
    setLoading(true)
    try {
      await deleteReport(reportId)
      setReports((prevReports) =>
        prevReports.filter((report) => report.reportId !== reportId),
      )
      console.log('리포트 삭제 완료')
    } catch (error) {
      console.error('Error removing report:', error.message)
    } finally {
      setLoading(false)
    }
  }

  const value = {
    favorites,
    reports,
    loading,
    addKeyword,
    removeKeyword,
    updateReportViewStatus,
    removeReport,
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  return context
}
