import styled from "styled-components";
import PlusBtn from "../MyPage/PlusBtn";

import {useNavigate} from 'react-router-dom';


// MyPage에서만 추가해도 될듯, MyPage 완성되면 없애기. 
const Wrapper = styled.div`
  height: 40vh;
  display: flex;
  width: 100%;
  // justify-content: space-between;
  flex-direction: column;
  margin-top: 15px;
  gap: 5px;
`;


const WritingBox = styled.div`
  height: 50%;
  background-color: #eeeeee;
  display: flex;
  width: 100%;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
`;


const NomalText = styled.div``;

// 문화 유형 매핑해줘야. 
function WritingList({ children, myWritings }) {



  return (
    <Wrapper>
      <WritingBox>게시글1</WritingBox>
      <WritingBox>게시글2</WritingBox>
      <WritingBox>게시글3</WritingBox>
    </Wrapper>
  );
}

export default WritingList;
