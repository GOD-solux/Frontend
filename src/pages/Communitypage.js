import styled from "styled-components";
<<<<<<< Updated upstream
=======
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

>>>>>>> Stashed changes
import Header from "../components/Header";
import CategoryHeader from "../components/Community/CategoryHeader";
import PostItem from "../components/Community/PostItem";
import WriteBtnIcon from "../components/Community/WriteBtnIcon";

const Wrapper = styled.div`
  width: 100%;

  //임시 중앙정렬
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  //페이지넘버 설정을 위한 임시 padding-bottom
  padding-bottom: 100px;
`;

const Container = styled.div`
  width: 100%;
  background-color: #f1f4fa;
  border-radius: 15px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  //임시
`;

const HashTagContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  height: 50px;
`;

const HashTagBtn = styled.button`
  width: 90px;
  height: 40px;
  background-color: white;
  border: none;
  border-radius: 50px;
  font-size: 16px;

  cursor: pointer;
`;

const HashTagList = ["맛집", "동행", "비추", "추천", "후기"];

function Communitypage({ category }) {
<<<<<<< Updated upstream
=======
  const [post, setPost] = useState(postData);
  const [hashtag, setHashtag] = useState(HashTagList);
  const [selectedHashtag, setSelectedHashtag] = useState(null);
  const navigate = useNavigate();

  const selectHashtag = (e) => {
    const newHashtag = hashtag.map((v, i) =>
      i === parseInt(e.target.id)
        ? { ...v, selected: !v.selected }
        : { ...v, selected: false }
    );
    setHashtag(newHashtag);

    const selected = newHashtag.find((v) => v.selected);

    setSelectedHashtag(selected ? selected.name : null);
  };

  const handlePostLike = (id) => {
    setPost(
      post.map((v) => (id === v.id ? { ...v, like: v.like + 1 } : { ...v }))
    );
  };

  const filteredPosts = post.filter((v) => {
    return (
      (category === "전체" || v.category === category) &&
      (!selectedHashtag || v.hashtag.includes(selectedHashtag))
    );
  });

  const handleClick = (post) => {
    navigate('/view-post', { state: { post } });
  };

>>>>>>> Stashed changes
  return (
    <Wrapper>
      <Header />
      <CategoryHeader page="community" category={category} />
      <Container>
        <HashTagContainer>
          {HashTagList.map((v, i) => (
            <HashTagBtn key={i}>#{v}</HashTagBtn>
          ))}
        </HashTagContainer>
<<<<<<< Updated upstream
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
=======

        {filteredPosts.map((v) => (
          <div key={v.id} onClick={() => handleClick(v)}>
          <PostItem post={v} onLikeClick={handlePostLike} />
          </div>
        ))}
>>>>>>> Stashed changes
      </Container>
      <WriteBtnIcon />
    </Wrapper>
  );
}

export default Communitypage;
