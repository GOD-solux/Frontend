import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

import { postDatas as initialPostDatas } from '../../src/datas/postData';

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

function WritingsPage({postDatas = initialPostDatas} ) {
  const navigate = useNavigate();

  // 배열 복사 후 최신순으로 정렬
  const sortedWritings = [...postDatas].sort((a, b) => new Date(b.writeDatetime) - new Date(a.writeDatetime));
  const [writingList, setWritingList] = useState(sortedWritings); // postData 사용

  const handleClick = (writing) => {
    // // postId로 전체 postData에서 해당 게시글 찾기
    const selectedPost = postDatas.find(post => post.id === writing.postId);
    navigate('/view-post', { state: { post: selectedPost } });
  };

  

  return (
    <Wrapper>
      <Header text="내가 작성한 글" login={true}/>
      <Container>
        {writingList.map((writing) => (
          <WritingBox key={writing.postId} onClick={() => handleClick(writing)}>
            <TextWrapper>
              <Title>{writing.postTitle}</Title>
              <Nickname>{writing.nickname}</Nickname>
            </TextWrapper>
            <DateTime>{writing.writeDatetime}</DateTime>
          </WritingBox>
        ))}
      </Container>
    </Wrapper>
  );
}

export default WritingsPage;
