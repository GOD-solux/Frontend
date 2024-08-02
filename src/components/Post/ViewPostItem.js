import styled from "styled-components";
import LikeBtnIcon from "../Community/LikeBtnIcon";
import { userData } from "../../datas/user";

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
  gap: 20px;
`;

const RowSection = styled.div`
  display: flex;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
`

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

const HashTagContainer = styled.div`
  display: flex;
  gap: 10px;
`;

function ViewPostItem({ post, onLike }) {

  const user = userData.find((v) => v.id === post.userId);

  if (!post) {
    return <div>no data..</div>;
  }

  return (
    <Wrapper>
      <ColSection>
        <RowSection>
          <ProfileImage src={user?.profileImg} />
          <ColSection>
            <div>{user?.userName}</div>
            <div>{post.date}</div>
          </ColSection>
        </RowSection>
        <Title>{post.title}</Title>
        <div>{post.content}</div>
        <PostImage src={post.postImg} />
        <HashTagContainer>
          {post.hashtag.map((v, i) => (
            <HashTag key={i}>#{v}</HashTag>
          ))}
        </HashTagContainer>
      </ColSection>
      <RowSection>
        <LikeBtn onClick={onLike}>
          <LikeBtnIcon />{post.like}
        </LikeBtn>
      </RowSection>
    </Wrapper>
  );
}

export default ViewPostItem;