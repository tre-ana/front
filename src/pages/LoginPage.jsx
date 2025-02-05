import React from 'react'
import { LoginForm } from '../components/Login/LoginForm'
import { AuthIllustration } from '../components/AuthIllustration'
import IllustrationImage from '../assets/Illustration.svg'

const LoginPage = () => (
  <>
    <LoginForm />
    <AuthIllustration src={IllustrationImage} />
  </>
)

export default LoginPage
