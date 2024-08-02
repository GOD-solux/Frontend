import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";
import Box from "../components/Box";
import Button from "../components/Button";
import Header from "../components/Header";
import Id from "../assets/TextInputimg/id.png";
import Pw from "../assets/TextInputimg/pw.png";
import CheckPw from "../assets/TextInputimg/check.png";
import TextInput from '../components/TextInput';
import Modal from '../components/Modal';

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
`;

const Textarea = styled.input`
    font-size: 16px; 
    line-height: 20px;
    border: none;
    border-radius: 10px;
    margin: 5px 20px;
    padding: 10px;
    resize: none;
    background-color: #EEEEEE;
    width: 350px; 
    height: 40px;
    outline: none;
`;

const Divider = styled.div`
  width: 350px;
  height: 1px;
  background-color: #CCC;
  margin: 10px 0;
`;

const NewButton = styled(Button)`
  &&& {
    padding: 13px 60px;
    font-size: 20px;
    border-radius: '30px';
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
    margin: 0px;
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

const baseInfo = {
  id : null,
  pw: null,
  name: null,
  interest: [],
}

function SignUp(props) {
  const navigate = useNavigate();
 
  const [userInfo, setUserInfo] = useState(baseInfo);


  useEffect(() => {
    console.log(userInfo)
    
  }, [userInfo])
 
   const [confirmPassword, setConfirmPassword] = useState("");
   const [pwMatch, setPwMatch] = useState(true);

   const [error, setError] = useState("");

   const [showModal, setShowModal] = useState(false);
   const [modalMessage, setModalMessage] = useState("");

  const register = () => {
    if (userInfo.pw !== confirmPassword) {
      setPwMatch(false);
      return;
    }
    if (!userInfo.name) {
      setError("이름은 필수 입력란입니다.");
      return;
    }
  

    axios
      .post('http://localhost:3000/auth/sign-up', {
        baseInfo
      })
      .then((response) => {
        console.log('회원가입 성공:', response.data);
        localStorage.setItem('token', response.data.jwt);
        setModalMessage("회원가입이 완료되었습니다.");
        setShowModal(true);
        navigate("/");
      })
      .catch((error) => {
        console.log(userInfo.name, userInfo.id, userInfo.pw, userInfo.interest);
        console.error('회원가입 오류:', error.response);
        setModalMessage("회원가입이 완료되었습니다.");
        setShowModal(true);
        
      });
  };

  const handleInterestClick = (index) => {
    setUserInfo(prevUserInfo => {
      if (prevUserInfo.interest.includes(index)) {
        return {
          ...prevUserInfo,
          interest: prevUserInfo.interest.filter(i => i !== index),
        };
      } else {
        return {
          ...prevUserInfo,
          interest: [...prevUserInfo.interest, index],
        };
      }
    });
  };


  return (
    <Wrapper>
      <Header />
      <Box>
        <Text title>회원가입</Text>
        <Idarea>
          <TextInput 
            type="text" 
            img={Id} 
            placeholder="아이디"
            value={userInfo.id}
            onChange={(event) => setUserInfo({...userInfo, id: event.target.value})}
            withButton={true}
          />
        </Idarea>
        
         <TextInput 
          type="password" 
          img={Pw} 
          placeholder="비밀번호" 
          maxLength={12}
          value={userInfo.pw}
          onChange={(event) => setUserInfo({...userInfo, pw: event.target.value})}
        />
        
        <TextInput 
          type="password" 
          img={CheckPw} 
          placeholder="비밀번호 확인"
          maxLength={12}
          value={confirmPassword}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
            setPwMatch(event.target.value === userInfo.pw);
          }}
        />
        {!pwMatch && <ErrorText>비밀번호가 일치하지 않습니다.</ErrorText>}
        

        <Divider />
  
        <Text>1. 이름(닉네임) *</Text>
        <Textarea
          value={userInfo.name}
          onChange={(event) => {
            setUserInfo({...userInfo, name: event.target.value});
            setError("");
          }}
        />
        {error && <ErrorText>{error}</ErrorText>}
        
        <Text>2. 관심분야(선택)</Text>
        <ButtonGroup>
          {['공연', '전시', '스포츠', '도서'].map((title, index) => (
            <InterestButton
              key={index}
              active={userInfo.interest.includes(index)}
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

      {showModal && <Modal message={modalMessage} onClick={() => navigate("/login")}/>}

     
    </Wrapper>
  );
}

export default SignUp;
