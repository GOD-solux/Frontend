import styled from "styled-components";
import LikeBtnIcon from "./LikeBtnIcon";
import { useNavigate } from "react-router-dom";

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

function PostItem() {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate("/view-post")}>
      <ColSection>
        <RowSection>
          <ProfileImage />
          <ColSection>
            <div>닉네임</div>
            <div>날짜</div>
          </ColSection>
        </RowSection>
        <div>내용</div>
      </ColSection>
      <RowSection>
        <PostImage />
        <LikeBtn>
          <LikeBtnIcon />0
        </LikeBtn>
      </RowSection>
    </Wrapper>
  );
}

export default PostItem;
