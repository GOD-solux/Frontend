import styled from "styled-components";
import { useEffect, useState } from "react";

import { likeDatas as initialLikeDatas } from '../../datas/likeData';

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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 3px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-size: 15px;
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

function LikesList({likeDatas=initialLikeDatas}) {
  // 최신순으로 정렬
  const sortedLikes = [...likeDatas].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <Wrapper>
      {sortedLikes.slice(0, 3).map((like) => (
        <WritingBox key={like.id}>
          <TextWrapper>
            <H1>{like.title}</H1>
            <NomalText>{like.nickname}</NomalText>
          </TextWrapper>
          <DateTime>{like.date}</DateTime>
        </WritingBox>
      ))}
    </Wrapper>
  );
}

export default LikesList;
