// ResultPage.js
import React,{useEffect} from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import ResultBox from "../components/ResultPage/ResultBox";
import AgainBtn from "../components/ResultPage/AgainBtn";
import { types, descriptions, activity, links, images } from "../components/ResultPage/results";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 700px;
`;

const Container = styled.div`
  width: 100%;
  height: 90%;
  background-color: #f3f3f3;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ReWrapper = styled.div`
  width: 20vw;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.h3`
  text-decoration: underline;
  font-weight: 600;
  text-underline-offset: 2px;
`;

const Culture = styled.p`
  width: 100%;
  height: 60%;
  font-size: 13px;
  background-color: #d8e5ff;
  border-radius: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  position: relative;
  cursor: pointer;
`;

const CultureWrapper = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
`;

function ResultPage() {
  const navigate = useNavigate();
  const { resultId } = useParams(); // resultId는 A, B, C 중 하나로 가정

  // resultId에 따라 해당 타입의 데이터를 가져옴
  const resultType = types[resultId];
  const resultDescription = descriptions[resultId];
  const resultActivity = activity[resultId];
  const resultLinks = links[resultId];
  const resultImage = images[resultId];

  // resultId를 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('resultId', resultId);
  }, [resultId]);

  const handleAgainClick = () => {
    navigate(`/typeTest/1`);
  };

  const handleRecommendClick = (index) => {
    if (resultLinks[index]) {
      navigate(resultLinks[index]);
    }
  };

  return (
    <Wrapper>
      <Header text="유형테스트" />
      <Container>
        <ResultBox
          type={resultType}
          description={resultDescription}
          image={resultImage}
        />
        <ReWrapper>
          <Text>추천 문화 생활</Text>
          <CultureWrapper>
            {resultActivity.map((activityName, index) => (
              <Culture key={index} onClick={() => handleRecommendClick(index)}>
                <span>{activityName}</span>
              </Culture>
            ))}
          </CultureWrapper>
        </ReWrapper>
        <AgainBtn onClick={handleAgainClick} />
      </Container>
    </Wrapper>
  );
}

export default ResultPage;
