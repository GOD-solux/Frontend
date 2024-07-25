import styled from "styled-components";
import PlusBtn from "../MyPage/PlusBtn";

// MyPage에서만 추가해도 될듯, MyPage 완성되면 없애기. 
const Wrapper = styled.div`
  height: 40vh;
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 30px;
  gap: 5px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TypeBox = styled.div`
  height: 50%;
  background-color: #eeeeee;
  display: flex;
  width: 100%;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
`;

const H1 = styled.h1`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 7px;
`;

const NomalText = styled.div``;

// 문화 유형 매핑해줘야. 
function WritingList({ children, myWritings }) {
  return (
    <Wrapper>
      <HeaderWrapper>
        <H1>{children}</H1>
        <PlusBtn>더 보기</PlusBtn>
      </HeaderWrapper>
      <TypeBox>게시글1</TypeBox>
      <TypeBox>게시글2</TypeBox>
      <TypeBox>게시글3</TypeBox>
    </Wrapper>
  );
}

export default WritingList;
