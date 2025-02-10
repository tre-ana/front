import React, { useState } from 'react'
import styled from 'styled-components'
import { FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useSearch } from '../../contexts/SearchContext'

export const Search = () => {
  const { searchState, updateSearchState } = useSearch()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const [keyword, setKeyword] = useState(searchState.keyword)
  const [startDate, setStartDate] = useState(searchState.startDate)
  const [endDate, setEndDate] = useState(searchState.endDate)
  const [comparisonTarget, setComparisonTarget] = useState(
    searchState.comparisonTarget,
  )
  const [isComparisonDisabled, setIsComparisonDisabled] = useState(
    searchState.isComparisonDisabled,
  )

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'keyword') setKeyword(value)
    if (name === 'startDate') setStartDate(value)
    if (name === 'endDate') setEndDate(value)
    if (name === 'comparisonTarget') setComparisonTarget(value)
  }

  const handleCheckboxChange = () => {
    setIsComparisonDisabled(!isComparisonDisabled)
    if (!isComparisonDisabled) {
      setComparisonTarget('')
    }
  }

  const handleSearch = () => {
    if (!keyword.trim()) {
      alert('키워드를 입력해주세요')
      return
    }

    updateSearchState({
      keyword,
      startDate,
      endDate,
      comparisonTarget,
      isComparisonDisabled,
    })
    console.log(searchState)
    setKeyword('')
    setStartDate('')
    setEndDate('')
    setComparisonTarget('')
    setIsComparisonDisabled(false)
  }

  return (
    <NavDropdown>
      <DropdownHeader onClick={() => setIsSearchOpen(!isSearchOpen)}>
        <FaSearch /> search {isSearchOpen ? <FaChevronUp /> : <FaChevronDown />}
      </DropdownHeader>
      {isSearchOpen && (
        <SearchPanel>
          <FieldLabel>
            키워드
            <SearchField
              type="text"
              name="keyword"
              value={keyword}
              placeholder="키워드"
              onChange={handleInputChange}
            />
          </FieldLabel>
          <FieldLabel>
            기간
            <DateContainer>
              <SearchField
                type="date"
                name="startDate"
                value={startDate}
                onChange={handleInputChange}
              />
              <SearchField
                type="date"
                name="endDate"
                value={endDate}
                onChange={handleInputChange}
              />
            </DateContainer>
          </FieldLabel>
          <FieldLabel>
            비교 대상
            <SearchField
              type="text"
              name="comparisonTarget"
              value={comparisonTarget}
              placeholder="비교 대상"
              disabled={isComparisonDisabled}
              onChange={handleInputChange}
            />
          </FieldLabel>
          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              checked={isComparisonDisabled}
              onChange={handleCheckboxChange}
            />
            비교대상 없음
          </CheckboxContainer>
          <SearchButton onClick={handleSearch}>Search</SearchButton>
        </SearchPanel>
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
const SearchPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
  margin-bottom: 20px;
`

const SearchField = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
`

const Checkbox = styled.input``

const SearchButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`
const FieldLabel = styled.label`
  font-size: 14px;
  color: #666;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
