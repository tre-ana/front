import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import DashboardPage from '../pages/DashboardPage'
import AlertReportPage from '../pages/AlertReportPage'
import AlertListPage from '../pages/AlertListPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/:bookmarkName/report/:date" element={<AlertReportPage />} />
      <Route path="/:bookmarkName/reportlist" element={<AlertListPage />} />
    </Routes>
  )
}

export default AppRoutes
