import React, { createContext, useState, useEffect } from 'react'
import { loginUser, getUserInfo } from '../services/Api'

export const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token'), // token을 초기값으로 설정
    user: null,
    isAuthenticated: false,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (auth.token) {
          const userInfo = await getUserInfo()
          setAuth({
            token: auth.token,
            user: userInfo.user,
            isAuthenticated: true,
          })
        } else {
          setAuth({ ...auth, user: null, isAuthenticated: false })
        }
      } catch (error) {
        console.error('Error fetching user info:', error.message)
        setAuth({ ...auth, user: null, isAuthenticated: false })
      } finally {
        setLoading(false) // 로딩 상태 종료
      }
    }

    fetchUser()
  }, [auth.token]) // auth.token이 변경될 때마다 다시 실행되도록 설정

  const login = async (email, password) => {
    try {
      const data = await loginUser(email, password)
      if (data.access_token) {
        localStorage.setItem('token', data.access_token)
        const userInfo = await getUserInfo()
        setAuth({
          token: data.access_token,
          user: userInfo.user,
          isAuthenticated: true,
        })
        return true // 로그인 성공
      }
      return false // 로그인 실패
    } catch (error) {
      console.error('Login failed:', error.message)
      return false // 로그인 실패
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setAuth({
      token: null,
      user: null,
      isAuthenticated: false,
    })
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
