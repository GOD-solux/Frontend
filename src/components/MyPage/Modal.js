// Modal.js
import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;

  font-size:15px;
`;

const ModalButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  background: #A3B7EA;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const Modal = ({ message, onClose }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <p>{message}</p>
        <ModalButton onClick={onClose}>확인</ModalButton>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
