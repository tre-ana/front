import React from 'react'
import { AuthLayout } from '../components/Layout'
import { AuthForm } from '../components/Login/AuthForm'
import { AuthIllustration } from '../components/AuthIllustration'
import IllustrationImage from '../assets/Illustration.svg'

const LoginPage = () => (
  <AuthLayout>
    <AuthForm />
    <AuthIllustration src={IllustrationImage} />
  </AuthLayout>
)

export default LoginPage
