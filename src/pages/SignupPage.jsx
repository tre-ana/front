import React from 'react'
import { Layout } from '../components/Layout'
import { SignupForm } from '../components/signup/SignupForm'
import { AuthIllustration } from '../components/AuthIllustration'
import IllustrationImage from '../assets/Illustration.svg'

const SignupPage = () => (
  <Layout>
    <SignupForm />
    <AuthIllustration src={IllustrationImage} />
  </Layout>
)

export default SignupPage
