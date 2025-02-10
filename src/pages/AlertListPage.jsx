import React, { useContext, useEffect } from 'react'
import { AlertList } from '../components/AlertList/AlertList'
import { AuthContext } from '../contexts/AuthContext'
import { useParams, useNavigate } from 'react-router-dom'

const AlertListPage = () => {
  const { auth, loading } = useContext(AuthContext)
  const navigate = useNavigate()
  const { bookmarkName } = useParams()

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

  return <AlertList bookmarkName={decodeURIComponent(bookmarkName)} />
}

export default AlertListPage
