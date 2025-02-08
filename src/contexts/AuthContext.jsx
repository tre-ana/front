import React, { createContext, useState, useEffect } from 'react'
import { loginUser, getUserInfo } from '../services/UserApi'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userInfo = await getUserInfo()
        setUser(userInfo.user) // 로그인된 사용자 정보
        console.log(userInfo.user)
      } catch (error) {
        console.error(error)
        setUser(null) // 로그인되지 않은 상태
      } finally {
        setLoading(false) // 로딩 상태 종료
      }
    }

    fetchUser()
  }, [])

  const login = async (email, password) => {
    try {
      const data = await loginUser(email, password)
      if (data && data.access_token) {
        localStorage.setItem('token', data.access_token)
        const userInfo = await getUserInfo()
        setUser(userInfo.user)
        return true // 로그인 성공
      }
      return false // 로그인 실패
    } catch (error) {
      console.error('Login failed:', error)
      return false // 로그인 실패
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
