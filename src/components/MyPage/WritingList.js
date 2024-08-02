import styled from "styled-components";
import PlusBtn from "../MyPage/PlusBtn";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

const Wrapper = styled.div`
  height: 40vh;
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 15px;
  gap: 5px;
`;

const WritingBox = styled.div`
  height: 50%;
  background-color: #eeeeee;
  display: flex;
  flex-direction: row; /* 수평 정렬 */
  align-items: center;
  justify-content: space-between; /* 공간을 양쪽으로 나누기 */
  padding: 10px;
  border-radius: 3px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin: 5px;
`;

const NomalText = styled.p`
  font-size: 14px;
  margin: 7px;
`;

const DateTime = styled.p`
  font-size: 12px;
  margin: 0;
  color: gray; 
`;

function WritingList({ writings }) {
  return (
    <Wrapper>
      {writings.slice(0, 3).map((writing) => (
        <WritingBox key={writing.postId}>
          <TextWrapper>
            <H1>{writing.postTitle}</H1>
            <NomalText>{writing.nickname}</NomalText>
          </TextWrapper>
          <DateTime>{writing.writeDatetime}</DateTime>
        </WritingBox>
      ))}
    </Wrapper>
  );
}

export default WritingList;
