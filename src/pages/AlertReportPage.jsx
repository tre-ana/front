import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { Report } from '../components/AlertReport/Report'

const AlertReportPage = () => {
  const { auth, loading } = useContext(AuthContext)
  const navigate = useNavigate()

  const { bookmarkName, date } = useParams()

  useEffect(() => {
    if (!loading && !auth.user) {
      // 로그인 상태가 아니면 로그인 페이지로 리디렉션
      alert('다시 로그인해주세요.')
      navigate('/')
    }
  }, [loading, auth.user, navigate])

  if (loading) {
    // 로딩 중이라면 아무것도 렌더링하지 않음
    return <div>Loading...</div>
  }

  return <Report bookmarkName={decodeURIComponent(bookmarkName)} date={date} />
}

export default AlertReportPage
