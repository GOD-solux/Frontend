import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

import { postDatas as initialPostDatas } from '../../src/datas/postData'; // 데이터 파일 경로 확인

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
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 20px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const Title = styled.h2`
  font-size: 15px;
  font-weight: bold;
  margin: 5px 0;
`;

const Nickname = styled.p`
  font-size: 14px;
  margin: 7px 0;
`;

const DateTime = styled.p`
  font-size: 12px;
  color: gray;
  margin: 0;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

function WritingsPage({ postDatas = initialPostDatas }) {
  const navigate = useNavigate();

  // 배열 복사 후 최신순으로 정렬
  const sortedWritings = [...postDatas].sort((a, b) => new Date(b.date) - new Date(a.date));
  const [writingList, setWritingList] = useState(sortedWritings);

  const handleClick = (writing) => {
    // id로 전체 postData에서 해당 게시글 찾기
    const selectedPost = postDatas.find(post => post.id === writing.id);
    navigate('/view-post', { state: { post: selectedPost } });
  };

  return (
    <Wrapper>
      <Header text="내가 작성한 글" login={true}/>
      <Container>
        {writingList.map((writing) => (
          <WritingBox key={writing.id} onClick={() => handleClick(writing)}>
            <TextWrapper>
              <Title>{writing.title}</Title>
              <Nickname>{writing.nickname}</Nickname> {/* userId 대신 닉네임으로 바꿔야 할 경우 수정 필요 */}
            </TextWrapper>
            <DateTime>{writing.date}</DateTime>
          </WritingBox>
        ))}
      </Container>
    </Wrapper>
  );
}

export default WritingsPage;
