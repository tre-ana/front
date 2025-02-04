import React from 'react'
import styled from 'styled-components'

export const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 98.4vh;
  /* background-color: #f9fafb; */
`
