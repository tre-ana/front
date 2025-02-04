import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/GlobalStyles'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
