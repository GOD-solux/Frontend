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
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const PostImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
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

function PostItem({ post }) {
  const navigate = useNavigate();
  const user = userData.find((v) => v.id === post.userId);
  console.log(user);

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
        <div>{post.title}</div>
      </ColSection>
      <RowSection>
        <PostImage />
        <LikeBtn>
          <LikeBtnIcon />
          {post.like}
        </LikeBtn>
      </RowSection>
    </Wrapper>
  );
}

export default PostItem;
