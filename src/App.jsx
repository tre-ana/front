import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/GlobalStyles'
import AppRoutes from './routes/AppRoutes'
import { BookmarkProvider } from './contexts/BookmarkContext'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <Router>
      <AuthProvider>
        <BookmarkProvider>
          <AppRoutes />
        </BookmarkProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
