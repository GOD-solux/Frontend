import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TypeBtn from './TypeBtn'; // TypeBtn 컴포넌트 import
import ChangeBtn from './ChangeBtn';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';
import { activity } from '../../components/MyPage/types';

const Wrapper = styled.div`
  width: 85vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  gap: 5px; /* 항목 사이의 간격 */
  margin-top: 50px;
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

const LongBox = styled.div`
  display: flex;
  width: 35vw;
  height: 25px;
  background-color: #EFF5FF;
  border-radius: 5px;
  font-size: 14px;
  padding-left: 2%;
  align-items: center; 
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px; /* 버튼 사이의 간격을 줄이기 위해 5px로 설정 */
  align-items: center;
  width: 35vw;
`;

function MyProfile({ memberId, nickname, type }) {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const navigate = useNavigate(); 
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // type이 문자열로 전달된다고 가정하고, 이를 배열로 변환
    const types = activity[type] || [];
    setSelectedTypes(types);
  }, [type]);

  const handleTypeClick = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(selectedType => selectedType !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleFixClick = () => {
    console.log(selectedTypes);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handlePWclick = () => {
    navigate(`/pw-find`);
  };

  return (
    <Wrapper>
      <FieldWrapper>
        <Label>아이디</Label>
        <LongBox>{memberId}</LongBox>
      </FieldWrapper>
      <FieldWrapper>
        <Label>비밀번호</Label>
        <LongBox>⦁⦁⦁⦁⦁⦁⦁⦁⦁⦁⦁</LongBox>
        <ChangeBtn onClick={handlePWclick}>비밀번호 변경</ChangeBtn>
      </FieldWrapper>
      <FieldWrapper>
        <Label>이름(닉네임)</Label>
        <LongBox>{nickname}</LongBox>
      </FieldWrapper>
      <FieldWrapper>
        <Label>관심 분야</Label>
        <ButtonWrapper>
          <TypeBtn 
            onClick={() => handleTypeClick('공연')}
            selected={selectedTypes.includes('공연')}
            value="공연"
          >공연</TypeBtn>
          <TypeBtn
            onClick={() => handleTypeClick('전시')}
            selected={selectedTypes.includes('전시')}
            value="전시"
          >전시</TypeBtn>
          <TypeBtn
            onClick={() => handleTypeClick('스포츠')}
            selected={selectedTypes.includes('스포츠')}
            value="스포츠"
          >스포츠</TypeBtn>
          <TypeBtn
            onClick={() => handleTypeClick('도서')}
            selected={selectedTypes.includes('도서')}
            value="도서"
          >도서</TypeBtn>
        </ButtonWrapper>
        <ChangeBtn onClick={handleFixClick}>수정</ChangeBtn>
      </FieldWrapper>
      {modalOpen && (
        <Modal
          message="수정 완료 되었습니다."
          onClose={handleModalClose}
        />
      )}
    </Wrapper>
  );
}

export default MyProfile;
