import React from 'react'
import { SideBar } from '../components/SideBar/SideBar'
import { Dashboard } from '../components/Dashboard/Dashboard'
import styled from 'styled-components'

const DashboardPage = () => (
  <Layout>
    <SideBar />
    <Dashboard />
  </Layout>
)

export default DashboardPage

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  height: 98.4vh;
`
