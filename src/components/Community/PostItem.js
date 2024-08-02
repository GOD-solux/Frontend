import styled from "styled-components";
import LikeBtnIcon from "./LikeBtnIcon";

import { userData } from "../../datas/user";

import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

const Wrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  background-color: white;
`;

const ColSection = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  //align-items: center;
  gap: 20px;
`;
const RowSection = styled.div`
  display: flex;

  //justify-content: center;
  //align-items: center;
  gap: 20px;
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const PostImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
`;

const HashTag = styled.div`
  width: 60px;
  height: 30px;

  border: none;
  background-color: #85a1e8;
  border-radius: 50px;
  color: white;

  font-size: 13px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const LikeBtn = styled.button`
  width: 60px;
  height: 30px;

  border: none;
  background-color: #85a1e8;
  border-radius: 50px;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  cursor: pointer;
`;

function PostItem({ post, onLikeClick }) {
  const navigate = useNavigate();
  const user = userData.find((v) => v.id === post.userId);

  const likeUp = (e) => {
    e.stopPropagation();
    onLikeClick(post.id);
  };

  return (
    <Wrapper onClick={() => navigate("/view-post")}>
      <ColSection>
        <RowSection>
          <ProfileImage src={user.profileImg} />
          <ColSection>
            <div>{user.userName}</div>
            <div>{post.date}</div>
          </ColSection>
        </RowSection>
        <RowSection>
          {post.hashtag.map((v, i) => (
            <HashTag key={i}>#{v}</HashTag>
          ))}
        </RowSection>
        <div>{post.title}</div>
      </ColSection>
      <RowSection>
        <PostImage src={post.postImg} />
        <LikeBtn onClick={likeUp}>
          <LikeBtnIcon />
          {post.like}
        </LikeBtn>
      </RowSection>
    </Wrapper>
  );
}

export default PostItem;
