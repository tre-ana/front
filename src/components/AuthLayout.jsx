import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 98.4vh;
  /* background-color: #f9fafb; */
`
