import React from 'react'
import styled from 'styled-components'

export const AuthLayout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  height: 100vh;
  /* background-color: #f9fafb; */
`
