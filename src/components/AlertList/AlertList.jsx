import React, { useEffect, useState } from 'react'
import { useBookmark } from '../../contexts/BookmarkContext'
import { FaTrashAlt, FaCalendarAlt } from 'react-icons/fa'
import styled from 'styled-components'

export const AlertList = () => {
  const { selectedBookmark } = useBookmark()
  const [alertList, setAlertList] = useState([])

  useEffect(() => {
    // 샘플 데이터: 북마크 이름에 따라 다른 리스트 설정
    const sampleData = {
      Earnings: ['12 Dec, 2021', '10 Dec, 2021', '09 Dec, 2021'],
      Refunds: ['08 Dec, 2021', '07 Dec, 2021'],
      Declines: ['05 Dec, 2021'],
      Payouts: ['04 Dec, 2021', '02 Dec, 2021'],
    }

    setAlertList(sampleData[selectedBookmark] || [])
  }, [selectedBookmark])

  return (
    <Container>
      <Header>
        <Title>{selectedBookmark}</Title>
      </Header>
      <List>
        {alertList.map((alert, index) => (
          <ListItem key={index}>
            <InfoContainer>
              <FaCalendarAlt />
              <AlertText>{alert}</AlertText>
            </InfoContainer>
            <DeleteButton>
              <FaTrashAlt />
            </DeleteButton>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
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
