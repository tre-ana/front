import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import DashboardPage from '../pages/DashboardPage'
import AlertReportPage from '../pages/AlertReportPage'
import AlertListPage from '../pages/AlertListPage'
import { Layout } from '../components/Layout'
import { AuthLayout } from '../components/AuthLayout'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route
          path="/:bookmarkName/report/:date"
          element={<AlertReportPage />}
        />
        <Route path="/:bookmarkName/reportlist" element={<AlertListPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
