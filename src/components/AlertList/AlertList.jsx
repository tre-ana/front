import React, { useState } from 'react'
import { useBookmark } from '../../contexts/BookmarkContext'
import { FaTrashAlt } from 'react-icons/fa'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export const AlertList = () => {
  const { selectedBookmark } = useBookmark()

  const [reports, setReports] = useState([
    { id: 1, date: '12 Dec, 2021', checked: false },
    { id: 2, date: '10 Dec, 2021', checked: false },
    { id: 3, date: '09 Dec, 2021', checked: false },
    { id: 4, date: '08 Dec, 2021', checked: false },
    { id: 5, date: '07 Dec, 2021', checked: false },
    { id: 6, date: '05 Dec, 2021', checked: false },
    { id: 7, date: '04 Dec, 2021', checked: false },
    { id: 8, date: '02 Dec, 2021', checked: false },
    { id: 9, date: '01 Dec, 2021', checked: false },
  ])

  const navigate = useNavigate()

  const handleItemClick = (date) => {
    const formattedDate = date.replace(/\s/g, '-')
    navigate(`/${selectedBookmark}/report/${formattedDate}`)
  }

  const handleDelete = (id) => {
    e.stopPropagation()
    setReports(reports.filter((report) => report.id !== id))
  }

  const isCheck = (id) => {
    setReports(
      reports.map((report) =>
        report.id === id ? { ...report, checked: !report.checked } : report,
      ),
    )
  }

  return (
    <Container>
      <Header>
        <Title>{selectedBookmark}</Title>
      </Header>

      <List>
        {reports.map((report) => (
          <ListItem
            key={report.id}
            onClick={() => handleItemClick(report.date)}
          >
            <InfoContainer>
              <CheckboxContainer>
                <Checkbox
                  type="checkbox"
                  checked={report.checked}
                  onChange={() => isCheck(report.id)}
                />
              </CheckboxContainer>
              <AlertText>{report.date}</AlertText>
            </InfoContainer>
            <DeleteButton onClick={() => handleDelete(report.id)}>
              <FaTrashAlt />
            </DeleteButton>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px 100px;
  background-color: #f9fafb;
`

const Header = styled.div`
  margin-bottom: 20px;
`

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  display: flex;
  align-items: center;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const ListItem = styled.li`
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 18px;
  margin-bottom: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #666;
`

const AlertText = styled.span`
  font-size: 14px;
`

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #f44;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.2s;

  &:hover {
    color: #ff0000;
  }
`
const CheckboxContainer = styled.div`
  margin-right: 10px;
`

const Checkbox = styled.input`
  transform: scale(1.2);
`
