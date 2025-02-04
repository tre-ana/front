import React from 'react'
import { SideBar } from '../components/SideBar/SideBar'
import { AuthIllustration } from '../components/AuthIllustration'
import IllustrationImage from '../assets/Illustration.svg'
import styled from 'styled-components'

const AlertListPage = () => (
  <Layout>
    <SideBar />
    <AuthIllustration src={IllustrationImage} />
  </Layout>
)

export default AlertListPage

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  height: 98.4vh;
`
