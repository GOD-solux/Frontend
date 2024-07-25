import React from 'react';
import styled from 'styled-components';
import TypeBtn from './TypeBtn.js'; // TypeBtn 컴포넌트 import
import ChangeBtn from './ChangeBtn';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  width: 85vw;
  height: 25vh;
  display: flex;
  flex-direction: column;
  gap: 5px; /* 항목 사이의 간격 */
`;

const FieldWrapper = styled.div`
  display: flex;
  align-items: center; /* 수직 정렬 */
  gap: 10px; /* 텍스트와 LongBox 사이의 간격, 버튼과 LongBox 사이의 간격을 줄이기 위해 줄임 */
`;

const Label = styled.div`
  width: 90px; /* 텍스트와 LongBox의 시작점을 일치시키기 위해 고정 너비 설정 */
  font-size: 14px; /* 글씨 크기 조정 */
  font-weight: bold;
`;

//아이디, 이름(닉네임) response 받아와서 입력.
const LongBox = styled.div`
  display: flex;
  width: 35vw;
  height: 25px;
  background-color: #EFF5FF;
//   min-width: 150px; /* LongBox의 최소 너비를 설정하여 일관된 크기 유지 */
  border-radius: 5px;

  font-size:14px;
  // font-weight:bold;
  padding-left:2%;

  align-items: center; 
  
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 5px; /* 버튼 사이의 간격을 줄이기 위해 5px로 설정 */
//   margin-left: 1px; /* LongBox와 버튼 사이의 간격을 조절 */
    align-items: center;
    width:35vw;

    

`;

function MyProfile() {
  const [selectedTypes,setSelectedTypes]=useState([]);

  const handleTypeClick=(type)=>{
    if(selectedTypes.includes(type)){
       // filter -> selectedTypes 배열에서 type과 일치하지 않는 항목들만 남김
      setSelectedTypes(selectedTypes.filter(selectedType=>selectedType!==type));
    }else{
      // 스프레드 연산자(...) -> selectedTypes 배열의 모든 항목과 새로운 type을 포함하는 새로운 배열을 만듦
      setSelectedTypes([...selectedTypes,type]);
    }
  };

  const handleFixClick = () => {
    console.log(selectedTypes);
  };

  //비밀번호 변경
  // const handlePWclick=()=>{
  //     navigate(`/pw-find`);
  // };

  return (
    <Wrapper>
      <FieldWrapper>
        <Label>아이디</Label>
        <LongBox>solux123</LongBox>
      </FieldWrapper>
      <FieldWrapper>
        <Label>비밀번호</Label>
        <LongBox></LongBox>
          <ChangeBtn
            // onClick={handlePWclick} //비밀번호 변경
          >비밀번호 변경</ChangeBtn>
      </FieldWrapper>
      <FieldWrapper>
        <Label>이름(닉네임)</Label>
        <LongBox>solux123</LongBox>
      </FieldWrapper>
      <FieldWrapper>
        <Label>관심 분야</Label>
        <ButtonWrapper>
          <TypeBtn 
            onClick={()=>handleTypeClick('공연')}
            selected={selectedTypes.includes('공연')}
          >공연</TypeBtn>
          <TypeBtn
            onClick={()=>handleTypeClick('전시')}
            selected={selectedTypes.includes('전시')}
          >전시</TypeBtn>
          <TypeBtn
            onClick={()=>handleTypeClick('스포츠')}
            selected={selectedTypes.includes('스포츠')}
          >스포츠</TypeBtn>
          <TypeBtn
            onClick={()=>handleTypeClick('도서')}
            selected={selectedTypes.includes('도서')}
          >도서</TypeBtn>
        </ButtonWrapper>
        <ChangeBtn
          onClick={handleFixClick}
        >수정</ChangeBtn>
      </FieldWrapper>
    </Wrapper>
  );
}

export default MyProfile;
