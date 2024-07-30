import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Wrapper = styled.div`
  width: 100%;
 
  // display: flex;
  flex-direction: column; /* 세로 방향으로 배치 */
  align-items: center; /* 수평 중앙 정렬 */
  justify-content: center; /* 수직 중앙 정렬 */
  text-align: center;


  
  //페이지넘버 설정을 위한 임시 padding-bottom
  padding-bottom: 100px;
  
`;

const WritingBox = styled.div`
  height: 100px;
  background-color: #eeeeee;
  width: 80%;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  text-align: center;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* 수직 중앙 정렬 */
  text-align: center;
  gap: 40px;
  margin-top: 30px;
`;

function LikesPage() {
  return (
    <Wrapper>
      <Header text="공감한 글 목록" />
     <Container>
      <WritingBox>게시글 1</WritingBox>
      <WritingBox>게시글 2</WritingBox>
      <WritingBox>게시글 3</WritingBox>
      <WritingBox>게시글 4</WritingBox>
      <WritingBox>게시글 5</WritingBox>
      <WritingBox>게시글 6</WritingBox>
      <WritingBox>게시글 7</WritingBox>
    </Container>
    </Wrapper>
  );
}

export default LikesPage;
