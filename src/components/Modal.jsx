import React from "react";
import styled from "styled-components";
import {useState} from "react"
import Button from "../components/Button"

const Wrapper = styled.div`
    width: 350px;
    //height: 45px;
    background-color: #EEEEEE;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
`;

const ModalComponent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  display: column;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  gap: 20px;
`;

const CloseButton = styled.button`
  margin-top: 20px;
  width: 70px;
  height: 30px;
  border: none;
  background-color: #85a1e8;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #6a8bd8;
  }
`;

function Modal({message, onClick }){

    return(
    
        <Wrapper>
            <ModalComponent>
                <ModalContent>
                  {message}
                  <br/>
                 <CloseButton onClick={onClick}>
                    확인
                  </CloseButton>
                </ModalContent>
            </ModalComponent>
        </Wrapper>
        
    );
}

export default Modal;