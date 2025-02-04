import React, { useState } from 'react'
import styled from 'styled-components'
import { FaBookmark, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState([
    { id: 1, name: 'Earnings' },
    { id: 2, name: 'Refunds', badge: 6 },
    { id: 3, name: 'Declines' },
    { id: 4, name: 'Payouts' },
  ])
  const [isBookmarkOpen, setIsBookmarkOpen] = useState(false)

  const handleDeleteBookmark = (id) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id))
  }

  return (
    <NavDropdown>
      <DropdownHeader onClick={() => setIsBookmarkOpen(!isBookmarkOpen)}>
        <FaBookmark /> bookmark
        {isBookmarkOpen ? <FaChevronUp /> : <FaChevronDown />}
      </DropdownHeader>
      {isBookmarkOpen && (
        <DropdownList>
          {bookmarks.map((bookmark) => (
            <DropdownItem to="./reportlist" key={bookmark.id}>
              {bookmark.name}
              {bookmark.badge && (
                <NotificationBadge>{bookmark.badge}</NotificationBadge>
              )}
              <DeleteButton onClick={() => handleDeleteBookmark(bookmark.id)}>
                <FaTimes />
              </DeleteButton>
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </NavDropdown>
  )
}

const NavDropdown = styled.div`
  margin-bottom: 15px;
`

const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #666;
  cursor: pointer;
  margin-bottom: 8px;

  svg {
    margin-right: 10px;
  }
  svg:nth-of-type(2) {
    margin-left: 10px;
  }
`

const DropdownList = styled.div`
  padding: 0;
  margin: 0;
`

const DropdownItem = styled(Link)`
  font-size: 14px;
  color: #666;
  margin-left: 25px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  /* justify-content: space-between; */
`

const NotificationBadge = styled.span`
  background-color: #ff4d4d;
  color: white;
  padding: 2px 6px;
  border-radius: 50%;
  font-size: 10px;
  margin-left: 5px;
`

const DeleteButton = styled.span`
  color: #888;
  cursor: pointer;
  margin-left: 10px;
  display: flex;
  align-items: center;
`
