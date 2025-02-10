import React, { createContext, useContext, useState } from 'react'

const initialState = {
  keyword: '',
  startDate: '',
  endDate: '',
  comparisonTarget: '',
  isComparisonDisabled: false,
}

const SearchContext = createContext()

export const useSearch = () => useContext(SearchContext)

export const SearchProvider = ({ children }) => {
  const [searchState, setSearchState] = useState(initialState)

  const updateSearchState = (newState) => {
    setSearchState((prev) => ({ ...prev, ...newState }))
  }

  return (
    <SearchContext.Provider value={{ searchState, updateSearchState }}>
      {children}
    </SearchContext.Provider>
  )
}
