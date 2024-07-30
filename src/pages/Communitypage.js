import styled from "styled-components";
import Header from "../components/Header";
import CategoryHeader from "../components/Community/CategoryHeader";
import PostItem from "../components/Community/PostItem";
import WriteBtnIcon from "../components/Community/WriteBtnIcon";
import Footer from "../components/Footer";

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
`;

const HashTagList = ["맛집", "동행", "비추", "추천", "후기"];

function Communitypage({ category }) {
  return (
    <Wrapper>
      <Header text="커뮤니티" />
      <CategoryHeader page="community" category={category} />
      <Container>
        <HashTagContainer>
          {HashTagList.map((v, i) => (
            <HashTagBtn key={i}>#{v}</HashTagBtn>
          ))}
        </HashTagContainer>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </Container>
      <WriteBtnIcon />
      <Footer />
    </Wrapper>
  );
}

export default Communitypage;
