import React, { createContext, useContext, useState } from 'react'

const BookmarkContext = createContext()

export const useBookmark = () => useContext(BookmarkContext)

export const BookmarkProvider = ({ children }) => {
  const [selectedBookmark, setSelectedBookmark] = useState(null)
  const [bookmarks, setBookmarks] = useState([
    { id: 1, name: 'Earnings' },
    { id: 2, name: 'Refunds', badge: 6 },
    { id: 3, name: 'Declines' },
    { id: 4, name: 'Payouts' },
  ])

  const selectBookmark = (bookmarkName) => setSelectedBookmark(bookmarkName)

  const deleteBookmark = (id) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.filter((bookmark) => bookmark.id !== id),
    )
  }

  return (
    <BookmarkContext.Provider
      value={{ selectedBookmark, selectBookmark, bookmarks, deleteBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  )
}
