import styled from "styled-components";

import Header from "../components/Header";

const Wrapper = styled.div`
  width: 100%;

  //임시 중앙정렬
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  //임시 height
  height: 700px;
`;

function Mainpage() {
  return (
    <Wrapper>
      <Header />
      메인페이지입니다. 이정도 너비 어떨까요? 높이는 내용 추가하면서 자연스럽게
      하면 될 거 같아요.
    </Wrapper>
  );
}

export default Mainpage;
