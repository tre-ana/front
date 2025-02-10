import React, { useState, useEffect } from 'react'
import { useFavorites } from '../../contexts/FavoritesContext'
import { FaTrashAlt } from 'react-icons/fa'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export const AlertList = ({ bookmarkName }) => {
  const keyword = bookmarkName

  const { reports, updateReportViewStatus, removeReport } = useFavorites()

  const navigate = useNavigate()

  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    const filteredReports = reports.filter(
      (report) => report.keyword === keyword,
    )
    setFilteredData(filteredReports)
  }, [reports, keyword])

  const handleItemClick = (e, date) => {
    if (e.target.type !== 'checkbox' && e.target.type !== 'button') {
      const formattedDate = date.replace(/\s/g, '-')
      navigate(`/${encodeURIComponent(keyword)}/report/${formattedDate}`)
    }
  }

  const handleDelete = (reportId, e) => {
    e.stopPropagation()
    // 해당 리포트를 삭제
    removeReport(reportId)
  }

  const handleCheckboxChange = (
    reportId,
    isViewed,
    keyword,
    reportDate,
    keywordId,
    reportContent,
    e,
  ) => {
    e.stopPropagation()
    console.log(reports)
    console.log(filteredData)
    updateReportViewStatus(
      reportId,
      !isViewed,
      keyword,
      reportDate,
      keywordId,
      reportContent,
    ) // 읽음 상태 반전
  }

  return (
    <Container>
      <Header>
        <Title>{keyword} Daily Report List</Title>
      </Header>

      <List>
        {filteredData.map((filteredReports) => (
          <ListItem
            key={filteredReports.reportId}
            onClick={(e) => handleItemClick(e, filteredReports.reportDate)}
          >
            <InfoContainer>
              <CheckboxContainer>
                <Checkbox
                  type="checkbox"
                  checked={filteredReports.isViewed}
                  onChange={(e) =>
                    handleCheckboxChange(
                      filteredReports.reportId,
                      filteredReports.isViewed,
                      filteredReports.keyword,
                      filteredReports.reportDate,
                      filteredReports.keywordId,
                      filteredReports.reportContent,
                      e,
                    )
                  }
                />
              </CheckboxContainer>
              <AlertText>{filteredReports.reportDate}</AlertText>
            </InfoContainer>
            <DeleteButton
              onClick={(e) => handleDelete(filteredReports.reportId, e)}
            >
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
  height: 98.4vh;
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
