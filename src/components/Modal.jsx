import React from 'react'
import styled from 'styled-components'

export const Modal = ({ title, message, onCancel, onConfirm }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <Title>{title || '계정에서 로그아웃하시겠습니까?'}</Title>
        <Message>
          {message || '해당 대시보드에 액세스하려면 다시 로그인해야 합니다.'}
        </Message>
        <ButtonGroup>
          <CancelButton onClick={onCancel}>Cancel</CancelButton>
          <ConfirmButton onClick={onConfirm}>OK</ConfirmButton>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  )
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 300px;
`

const Title = styled.h2`
  color: #333;
  margin-bottom: 10px;
`

const Message = styled.p`
  color: #666;
  margin-bottom: 20px;
  font-size: 14px;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`

const CancelButton = styled.button`
  background-color: #fff;
  color: #000;
  padding: 10px;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
`

const ConfirmButton = styled.button`
  background-color: #000;
  color: white;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
