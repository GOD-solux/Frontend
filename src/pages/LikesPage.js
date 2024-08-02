import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { useEffect, useState } from 'react';

const Wrapper = styled.div`
  height: 40vh;
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 15px;
  gap: 5px;
  margin-bottom: 15px;
`;

const WritingBox = styled.div`
  height: 130px;
  background-color: #eeeeee;
  width: 80%;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 텍스트와 날짜를 양쪽 끝에 배치 */
  margin-bottom: 10px;
  padding: 10px 20px; /* 좌우 패딩 추가 */
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px; /* 텍스트와 날짜 사이의 간격 */
`;

const Title = styled.h2`
  font-size: 15px;
  font-weight: bold;
  margin: 5px 0; /* 상하 여백 */
`;

const Nickname = styled.p`
  font-size: 14px;
  margin: 7px 0; /* 상하 여백 */
`;

const DateTime = styled.p`
  font-size: 12px;
  color: gray;
  margin: 0; /* 상하 여백 제거 */
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

function LikesPage() {
  const [writingLikesList,setwritingLikesList]=useState([]);


   //내가 공감한 글 (mock data)
   useEffect(() => {
    fetch('http://localhost:3000/data/myLikesData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        const sortedData=data.sort((a,b)=>new Date(b.writeDatetime)-new Date(a.writeDatetime));
        setwritingLikesList(data);
      })
      .catch(error => {
        console.error('Error fetching likes data:', error);
      });
  }, []);


  return (
    <Wrapper>
      <Header text="내가 공감한 글" login={true} />
      <Container>
        {writingLikesList.map((like) => (
          <WritingBox key={like.postId}>
            <TextWrapper>
              <Title>{like.postTitle}</Title>
              <Nickname>{like.nickname}</Nickname>
            </TextWrapper>
            <DateTime>{like.writeDatetime}</DateTime>
          </WritingBox>
        ))}
      </Container>
    </Wrapper>
  );
}

export default LikesPage;
