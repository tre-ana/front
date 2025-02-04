import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AuthForm = () => {
  return (
    <FormWrapper>
      <Title>Log in</Title>
      <form>
        <Label>Username</Label>
        <Input type="text" placeholder="Enter your username" />
        <Label>Password</Label>
        <Input type="password" placeholder="Enter your password" />
        {/* <RememberSection>
          <input type="checkbox" />
          <span>Remember me</span>
          <ResetLink href="#">Reset Password?</ResetLink>
        </RememberSection> */}
        <LoginButton>Log in</LoginButton>
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
