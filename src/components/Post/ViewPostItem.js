import styled from "styled-components";
import LikeBtnIcon from "../Community/LikeBtnIcon";

const Wrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 25px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;

  background-color: #EDF1FE;
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
  width: 200px;
  height: 200px;
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
  return (
    <Wrapper>
      <ColSection>
        <RowSection>
          <ProfileImage />
          <ColSection>
            <div>닉네임</div>
            <div>날짜</div>
          </ColSection>
        </RowSection>
        <div>내용</div>
        <PostImage />
      </ColSection>
      <RowSection>
        <LikeBtn>
          <LikeBtnIcon />0
        </LikeBtn>
      </RowSection>
    </Wrapper>
  );
}

export default PostItem;