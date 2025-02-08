import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

export const LoginForm = () => {
  const { login, loading } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // 로그인 시도
      const result = await login(email, password)

      // 로그인 성공 시 대시보드로 리디렉션
      if (result) {
        console.log(result)
        navigate('/dashboard')
      } else {
        setError('Login failed. Please check your credentials and try again.')
      }
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.')
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <FormWrapper>
      <Title>Log in</Title>
      <form onSubmit={handleSubmit}>
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {/* <RememberSection>
          <input type="checkbox" />
          <span>Remember me</span>
          <ResetLink href="#">Reset Password?</ResetLink>
        </RememberSection> */}
        <LoginButton type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Log in'}
        </LoginButton>
      </form>

      <SignupSection>
        Don’t have an account yet?{' '}
        <NewAccountLink to="/signup">New Account</NewAccountLink>
      </SignupSection>
    </FormWrapper>
  )
}

const FormWrapper = styled.div`
  padding: 80px;
`

const Title = styled.h1`
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`

const Label = styled.label`
  display: block;
  margin-top: 15px;
  color: #666;
`

const Input = styled.input`
  width: 95%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ddd;
`

// const RememberSection = styled.div`
//   margin-top: 15px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `

// const ResetLink = styled.a`
//   color: #6b7cff;
//   text-decoration: none;
// `

const LoginButton = styled.button`
  background-color: #6b7cff;
  color: white;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 30px;
`

const SignupSection = styled.p`
  margin-top: 10px;
  color: #333;
  font-size: 10px;
  text-align: end;
`

const NewAccountLink = styled(Link)`
  color: #6b7cff;
  text-decoration: none;
`

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  font-size: 0.9rem;
`
