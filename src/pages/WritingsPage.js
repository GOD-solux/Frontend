import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Wrapper = styled.div`
  width: 100%;
  flex-direction: column; /* 세로 방향으로 배치 */
  align-items: center; /* 수평 중앙 정렬 */
  justify-content: center; /* 수직 중앙 정렬 */
  text-align: center;
  padding-bottom: 100px; /* 페이지 넘버 설정을 위한 임시 padding-bottom */
`;

const WritingBox = styled.div`
  height: 100px;
  background-color: #eeeeee;
  width: 80%;
  border-radius: 3px;
  align-items: center;
  justify-content: space-between; /* 텍스트와 날짜를 양쪽 끝에 배치 */
  margin-bottom: 10px;
  text-align: center;
  display: flex;
  padding: 10px;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const Nickname = styled.p`
  font-size: 14px;
  margin: 0;
`;

const DateTime = styled.p`
  font-size: 12px;
  margin: 0;
  color: gray;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  gap: 40px;
  margin-top: 30px;
`;

function WritingsPage() {
  const [writingList, setWritingList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/myWritingsData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        // 날짜를 기준으로 내림차순으로 정렬
        const sortedData = data.sort((a, b) => new Date(b.writeDatetime) - new Date(a.writeDatetime));
        setWritingList(sortedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Wrapper>
      <Header text="내가 작성한 글" login={true} />
      <Container>
        {writingList.map((writing) => (
          <WritingBox key={writing.postId}>
            <div>
              <Title>{writing.postTitle}</Title>
              <Nickname>{writing.nickname}</Nickname>
            </div>
            <DateTime>{writing.writeDatetime}</DateTime>
          </WritingBox>
        ))}
      </Container>
    </Wrapper>
  );
}

export default WritingsPage;
