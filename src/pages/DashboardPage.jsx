import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { Dashboard } from '../components/Dashboard/Dashboard'

const DashboardPage = () => {
  const { user, loading } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && !user) {
      // 로그인 상태가 아니면 로그인 페이지로 리디렉션
      navigate('/')
    }
  }, [loading, user, navigate])

  if (loading) {
    // 로딩 중이라면 아무것도 렌더링하지 않음
    return <div>Loading...</div>
  }

  return <Dashboard />
}

export default DashboardPage
