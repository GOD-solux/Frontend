import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";
import Box from "../components/Box";
import Button from "../components/Button";
import Header from "../components/Header";
import Id from "../assets/id.png";
import Pw from "../assets/pw.png";
import CheckPw from "../assets/check.png";

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
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const CloseButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #85a1e8;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #6a8bd8;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  height: 700px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ title }) => (title ? 'center' : 'flex-start')};
  font-weight: bold;
  font-size: ${({ title }) => (title ? '20px' : '15px')};
  margin: ${({ title }) => (title ? '5px 0px 25px 0px' : '10px 230px 0px 0px')};
`;

const Idarea = styled.label`
  display: flex;
  width: 350px;
  height: 50px;
  position: relative;
  margin: 7px 20px;
`;

const Textarea = styled.input`
    font-size: 16px; 
    line-height: 20px;
    border: none;
    border-radius: 3px;
    margin: 5px 20px;
    padding: 10px;
    resize: none;
    background-color: #EEEEEE;
    width: 350px; 
    height: 40px;
    outline: none;
    &::placeholder {
      font-size: 13px; 
      color: #9E9E9E;
      background: url(${props => props.img || Id}) no-repeat left center; 
      background-size: contain;
      padding-left: 30px;
      line-height: 1.5;
    }
`;

const Divider = styled.div`
  width: 350px;
  height: 1px;
  background-color: #CCC;
  margin: 20px 0;
`;

const NewButton = styled(Button)`
  &&& {
    padding: ${({ sign }) => (sign ? '13px 60px' : '13px 13px')};
    font-size: ${({ sign }) => (sign ? '20px' : '11px')};
    border-radius: ${({ sign }) => (sign ? '30px' : '3px')};
    white-space: nowrap;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin: 0px 60px 0px 0px;
`;

const InterestButton = styled(Button)`
  &&& {
    background-color: ${({ active }) => (active ? '#85A1E8' : '#EEEEEE')};
    color: ${({ active }) => (active ? 'white' : 'black')};
    font-size: 14px;
    font-weight: bold;
    padding: 8px 15px;
    border-radius: 7px;

    &:hover {
      background-color: #85A1E8;
      color: white;
    }
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin: 5px 0;
`;

function SignUp(props) {
  const navigate = useNavigate();
 

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [interests, setInterests] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [error, setError] = useState("");
  const [pwMatch, setPwMatch] = useState(true);

  const checkIdAvailability = () => {
    axios
      .post('http://localhost:3000/auth/sign-up', { id })
      .then((response) => {
        if (response.data.available) {
          setModalMessage("아이디 사용 가능합니다.");
        } else {
          setModalMessage("중복된 아이디가 존재합니다.");
        }
        setShowModal(true);
      })
      .catch((error) => {
        console.error('중복 확인 오류:', error);
      });
  };

  const register = () => {
    if (password !== confirmPassword) {
      setPwMatch(false);
      return;
    }
    if (!name) {
      setError("이름은 필수 입력란입니다.");
      return;
    }

    axios
      .post('http://localhost:3000/auth/sign-up', {
        username: name,
        id: id,
        password: password,
        interests: interests,
      })
      .then((response) => {
        console.log('회원가입 성공:', response.data);
        localStorage.setItem('token', response.data.jwt);
        setModalMessage("회원가입이 완료되었습니다.");
        setShowModal(true);
        navigate("/");
      })
      .catch((error) => {
        console.log(name, id, password, interests);
        console.error('회원가입 오류:', error.response);
      });
  };

  const handleInterestClick = (index) => {
    setInterests(prevInterests => {
      if (prevInterests.includes(index)) {
        return prevInterests.filter(i => i !== index);
      } else {
        return [...prevInterests, index];
      }
    });
  };

  return (
    <Wrapper>
      <Header />
      <Box>
        <Text title>회원가입</Text>
        <Idarea>
          <Textarea 
            type="text" 
            img={Id} 
            placeholder="아이디"
            value={id}
            onChange={(event) => setId(event.target.value)}
          />
          <NewButton
            title="중복확인"
            onClick={checkIdAvailability}
          />
        </Idarea>
        <Textarea 
          type="password" 
          img={Pw} 
          placeholder="비밀번호" 
          maxLength={12}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Textarea 
          type="password" 
          img={CheckPw} 
          placeholder="비밀번호 확인" 
          maxLength={12}
          value={confirmPassword}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
            setPwMatch(event.target.value === password);
          }}
        />
        {!pwMatch && <ErrorText>비밀번호가 일치하지 않습니다.</ErrorText>}

        <Divider />

        <Text>1. 이름(닉네임) *</Text>
        <Textarea
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            setError("");
          }}
        />
        {error && <ErrorText>{error}</ErrorText>}

        <Text>2. 관심분야(선택)</Text>
        <ButtonGroup>
          {['공연', '전시', '스포츠', '도서'].map((title, index) => (
            <InterestButton
              key={index}
              active={interests.includes(index)}
              title={title}
              onClick={() => handleInterestClick(index)}
            >
              {title}
            </InterestButton>
          ))}
        </ButtonGroup>

        <NewButton
          sign
          title="회원가입"
          onClick={register}
        />
      </Box>

      {showModal && (
        <ModalComponent>
          <ModalContent>
            <p>{modalMessage}</p>
            <CloseButton
              onClick={() => setShowModal(false)}
            >
              확인
            </CloseButton>
          </ModalContent>
        </ModalComponent>
      )}
    </Wrapper>
  );
}

export default SignUp;
