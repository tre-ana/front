import { BASE_URL, API_URLS } from './urls'

// JWT 토큰을 로컬 스토리지에서 가져옴
const getAuthHeader = () => {
  const token = localStorage.getItem('token')
  return token ? { Authorization: `Bearer ${token}` } : {}
}

// 로그인 API 호출
export const loginUser = async (email, password) => {
  const response = await fetch(`${BASE_URL}${API_URLS.LOGIN}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, pw: password }),
  })

  if (!response.ok) {
    throw new Error('Invalid credentials')
  }
  return response.json()
}

export const getUserInfo = async () => {
  const response = await fetch(`${BASE_URL}${API_URLS.PROTECTED}`, {
    headers: getAuthHeader(),
  })

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('Unauthorized')
    }
    throw new Error('Something went wrong')
  }
  return response.json()
}

// 회원가입 API 호출
export const signupUser = async (nickname, pw, email, userName) => {
  const response = await fetch(`${BASE_URL}${API_URLS.SIGNUP}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nickname, pw, email, user_name: userName }),
  })

  if (!response.ok) {
    throw new Error('Failed to create user')
  }
  return response.json()
}
