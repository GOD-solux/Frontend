import styled from "styled-components";
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { questions, questionMapping } from '../components/TestPage/questions';

import TestHeader from "../components/TestPage/TestHeader";
import Progress from "../components/TestPage/Progress";
import Question from "../components/TestPage/Question";
import AnswerBtn from "../components/TestPage/AnswerBtn";
import OrderBtn from "../components/TestPage/OrderBtn";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  height: 700px;
`;

const Container = styled.div`
  width: 100%;
  height: 90%;
  margin-top: -30px;
  background-color: #F3F3F3;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 13vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;
`;

function TestPage() {
  const navigate = useNavigate();
  const { questionNumber } = useParams();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    setSelectedAnswer(null); // 질문 변경 시 답변 초기화
  }, [questionNumber]);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextClick = () => {
    if (selectedAnswer !== null) {
      const nextPage = questionMapping[questionNumber][selectedAnswer];
      if (typeof nextPage === 'number') {
        navigate(`/typeTest/${nextPage}`);
      } else {
        navigate(`/typeTest/result/${nextPage}`);
      }
    }
  };

  const handleExClick = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <TestHeader />
      <Container>
        <Progress />
        <Question>{questions[questionNumber]}</Question>
        <ButtonWrapper>
          <AnswerBtn
            onClick={() => handleAnswerClick('yes')}
            selected={selectedAnswer === 'yes'}
          >
            Yes
          </AnswerBtn>
          <AnswerBtn
            onClick={() => handleAnswerClick('no')}
            selected={selectedAnswer === 'no'}
          >
            No
          </AnswerBtn>
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
