import React from 'react'
import { SideBar } from '../components/SideBar/SideBar'
import { AlertList } from '../components/AlertList/AlertList'
import styled from 'styled-components'

const AlertListPage = () => {
  return (
    <Layout>
      <SideBar />
      <AlertList />
    </Layout>
  )
}

export default AlertListPage

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  height: 98.4vh;
`
