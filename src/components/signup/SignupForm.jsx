import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { signupUser } from '../../services/Api'

export const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '', // userName
    email: '',
    username: '', // nickname
    password: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError('')

    try {
      await signupUser(
        formData.username, // nickname
        formData.password,
        formData.email,
        formData.fullName, // userName
      )
      navigate('/') // 회원가입 성공 시 로그인 화면으로 리디렉션
    } catch (err) {
      setError(
        err.message || 'Failed to create account. Please try again later.',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Sign Up</Title>

      {/* 에러 메시지 출력 */}
      {error && <ErrorMessage>{error}</ErrorMessage>}

      {['FullName', 'Email', 'Username', 'Password'].map((field, idx) => (
        <InputWrapper key={idx}>
          <Label>{field}</Label>
          <Input
            type={field.includes('Password') ? 'password' : 'text'}
            name={field.toLowerCase().replace(' ', '')} // camelCase로 변환
            value={formData[field.toLowerCase().replace(' ', '')]}
            onChange={handleChange}
            placeholder={`Enter your ${field}`}
            required
          />
        </InputWrapper>
      ))}

      <CheckboxWrapper>
        <input type="checkbox" required />
        <span>
          By creating an account, you agree to the <a href="#">terms</a>.
        </span>
      </CheckboxWrapper>

      <SubmitButton type="submit" disabled={loading}>
        {loading ? 'Creating account...' : 'Create account'}
      </SubmitButton>
    </FormContainer>
  )
}

const FormContainer = styled.form`
  padding: 80px;
  max-width: 400px;
  margin: 0 auto;
`

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`

const InputWrapper = styled.div`
  margin-bottom: 1rem;
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

const CheckboxWrapper = styled.div`
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  span {
    margin-left: 0.5rem;
  }
`

const SubmitButton = styled.button`
  background-color: #6b7cff;
  color: white;
  padding: 0.75rem;
  width: 100%;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #5848e5;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  font-size: 0.9rem;
`
