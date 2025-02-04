import React from 'react'
import { AuthLayout } from '../components/Layout'
import { SignupForm } from '../components/signup/SignupForm'
import { AuthIllustration } from '../components/AuthIllustration'
import IllustrationImage from '../assets/Illustration.svg'

const SignupPage = () => (
  <AuthLayout>
    <SignupForm />
    <AuthIllustration src={IllustrationImage} />
  </AuthLayout>
)

export default SignupPage
