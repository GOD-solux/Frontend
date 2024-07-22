import styled from "styled-components";
import {useNavigate,useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { questions,questionMapping } from '../components/TestPage/questions';

import TestHeader from "../components/TestPage/TestHeader";
import Progress from "../components/TestPage/Progress";
import Question from "../components/TestPage/Question";
import AnswerBtn from "../components/TestPage/AnswerBtn";
import OrderBtn from "../components/TestPage/OrderBtn";


const Wrapper = styled.div`
  width: 100%;

  //임시 중앙정렬
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  //임시 height
  height: 700px;
`;


const Container = styled.div`
  width: 100%;
  height:90%;
  margin-top:-30px;
  background-color: #F3F3F3;
  border-radius: 10px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  //임시
`;

const ButtonWrapper=styled.div`
    width:100%;
    height:13vh;

    display: flex;
    align-items: center;
    justify-content: center;
    gap:35px;
    // margin-top:5%;
`;


function TestPage() {
    const navigate=useNavigate();
    const [answer, setAnswer] = useState(null);
    const{questionNumber}=useParams();//현재 질문 번호를 URL에서 가져옴.

    // 기본 질문 번호를 1로 설정
  const currentQuestionNumber = questionNumber ? parseInt(questionNumber, 10) : 1;

  useEffect(() => {
    setAnswer(null); // 질문 변경 시 답변 초기화
  }, [currentQuestionNumber]);



  const handleAnswerClick = (response) => {
    setAnswer(response);
  };

  const handleNextClick = () => {
    if (answer) {
      const nextPage = questionMapping[currentQuestionNumber][answer];
      if (typeof nextPage === 'number') {
        navigate(`/typeTest/${nextPage}`); // 다음 질문 페이지로 이동
      } else {
        navigate(`/typeTest/result/${nextPage}`); // 결과 페이지로 이동
      }
    }
  };
  


    const handleExClick = () => {
      navigate(-1) // 이동하려는 페이지 경로
    };
    
    return (
      <Wrapper>
        <TestHeader/>
        <Container>
            <Progress/>
            <Question>{questions[currentQuestionNumber]}</Question>
            <ButtonWrapper>
              <AnswerBtn onClick={() => handleAnswerClick('yes')}>Yes</AnswerBtn>
              <AnswerBtn onClick={() => handleAnswerClick('no')}>No</AnswerBtn>
            </ButtonWrapper>
            <ButtonWrapper>
                <OrderBtn onClick={handleExClick}>← 이전</OrderBtn>
                <OrderBtn onClick={handleNextClick}>다음 →</OrderBtn>
            </ButtonWrapper>
        </Container>
      </Wrapper>
    );
  }
  
  export default TestPage;
  