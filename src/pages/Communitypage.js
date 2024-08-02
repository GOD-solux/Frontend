import styled from "styled-components";
import { useState } from "react";

import Header from "../components/Header";
import CategoryHeader from "../components/Community/CategoryHeader";
import PostItem from "../components/Community/PostItem";
import WriteBtnIcon from "../components/Community/WriteBtnIcon";
import Footer from "../components/Footer";

import { postData } from "../datas/post";

const Wrapper = styled.div`
  width: 100%;

  //임시 중앙정렬
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  //페이지넘버 설정을 위한 임시 padding-bottom
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

  &:hover {
    background-color: #e0e9ff;
  }
`;

const HashTagList = [
  { name: "맛집", selected: false },
  { name: "동행", selected: false },
  { name: "비추", selected: false },
  { name: "추천", selected: false },
  { name: "후기", selected: false },
];

function Communitypage({ category }) {
  const [post, setPost] = useState(postData);
  const [hashtag, setHashtag] = useState(HashTagList);

  const selectedHashtag = (e) => {
    setHashtag(
      hashtag.map((v, i) =>
        i === parseInt(e.target.id)
          ? { ...v, selected: !v.selected }
          : { ...v, selected: false }
      )
    );
  };

  const handlePostLike = (id) => {
    setPost(
      post.map((v) => (id === v.id ? { ...v, like: v.like + 1 } : { ...v }))
    );
  };

  return (
    <Wrapper>
      <Header text="커뮤니티" />
      <CategoryHeader page="community" category={category} />

      <Container>
        <HashTagContainer>
          {hashtag.map((v, i) => (
            <HashTagBtn
              key={i}
              style={v.selected ? { backgroundColor: "#e0e9ff" } : {}}
              id={i}
              value={v.name}
              onClick={selectedHashtag}
            >
              #{v.name}
            </HashTagBtn>
          ))}
        </HashTagContainer>

        {post.map((v, i) =>
          v.category === category || category === "전체" ? (
            <PostItem key={v.id} post={v} onLikeClick={handlePostLike} />
          ) : null
        )}
      </Container>
      <WriteBtnIcon />
      <Footer />
    </Wrapper>
  );
}

export default Communitypage;
