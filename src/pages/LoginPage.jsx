import React from 'react'
import { Layout } from '../components/Layout'
import { LoginForm } from '../components/Login/LoginForm'
import { AuthIllustration } from '../components/AuthIllustration'
import IllustrationImage from '../assets/Illustration.svg'

const LoginPage = () => (
  <Layout>
    <LoginForm />
    <AuthIllustration src={IllustrationImage} />
  </Layout>
)

export default LoginPage
