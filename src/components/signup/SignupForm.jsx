import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // API 요청 처리 로직
    console.log(formData)
    navigate('/')
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Sign Up</Title>
      {['FullName', 'Email', 'Username', 'Password'].map((field, idx) => (
        <InputWrapper key={idx}>
          <Label>{field}</Label>
          <Input
            type={field === 'password' ? 'password' : 'text'}
            name={field}
            value={formData[field]}
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
      <SubmitButton type="submit">Create account</SubmitButton>
    </FormContainer>
  )
}

const FormContainer = styled.form`
  padding: 80px;
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
`
