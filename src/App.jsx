import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/GlobalStyles'
import AppRoutes from './routes/AppRoutes'
import { FavoritesProvider } from './contexts/FavoritesContext'
import { AuthProvider } from './contexts/AuthContext'
import { SearchProvider } from './contexts/SearchContext'

function App() {
  return (
    <Router>
      <AuthProvider>
        <FavoritesProvider>
          <SearchProvider>
            <AppRoutes />
          </SearchProvider>
        </FavoritesProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
