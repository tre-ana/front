import React from 'react'
import { Layout } from '../components/Layout'
import { AuthForm } from '../components/Login/AuthForm'
import { AuthIllustration } from '../components/AuthIllustration'
import IllustrationImage from '../assets/Illustration.svg'

const LoginPage = () => (
  <Layout>
    <AuthForm />
    <AuthIllustration src={IllustrationImage} />
  </Layout>
)

export default LoginPage
