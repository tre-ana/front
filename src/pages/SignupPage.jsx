import React from 'react'
import { SignupForm } from '../components/signup/SignupForm'
import { AuthIllustration } from '../components/AuthIllustration'
import IllustrationImage from '../assets/Illustration.svg'

const SignupPage = () => (
  <>
    <SignupForm />
    <AuthIllustration src={IllustrationImage} />
  </>
)

export default SignupPage
