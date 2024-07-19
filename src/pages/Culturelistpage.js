import styled from "styled-components";

import Header from "../components/Header";
import CategoryHeader from "../components/Community/CategoryHeader";
//카테고리헤더 폴더 변경 필요

import CultureItem from "../components/Culturelist/CultureItem";

const Wrapper = styled.div`
  width: 100%;

  //임시 중앙정렬
  display: flex;
  flex-direction: column;
  align-items: center;

  //페이지넘버 설정을 위한 임시 padding-bottom
  padding-bottom: 100px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin-top: 30px;
`;

function Culturelistpage() {
  return (
    <Wrapper>
      <Header />
      <CategoryHeader />
      <Container>
        <CultureItem />
        <CultureItem />
        <CultureItem />
        <CultureItem />
        <CultureItem />
      </Container>
    </Wrapper>
  );
}

export default Culturelistpage;
