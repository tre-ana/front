import React from 'react'
import styled from 'styled-components'

export const AuthIllustration = ({ src }) => (
  <IllustrationWrapper>
    <Image src={src} alt="Login Illustration" />
  </IllustrationWrapper>
)

const IllustrationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eef0f5;
  /* height: 100%; */
`

const Image = styled.img`
  width: 100%;
  max-width: 400px;
`
