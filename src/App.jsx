import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/GlobalStyles'
import AppRoutes from './routes/AppRoutes'
import { BookmarkProvider } from './contexts/BookmarkContext'

function App() {
  return (
    <Router>
      <BookmarkProvider>
        <AppRoutes />
      </BookmarkProvider>
    </Router>
  )
}

export default App
