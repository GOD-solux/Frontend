import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.div`
  background: ${props => props.selected ? '#EFF5FF' : 'white'}; /* 동적으로 배경색 설정 */
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => props.selected ? '#007BFF' : '#EFF5FF'}; /* 선택된 버튼에 강조 표시 */
  width: 6vw;
  height: 4vh;
  color: ${props => props.selected ? '#007BFF' : 'black'}; /* 선택된 버튼 텍스트 색상 변경 */
  font-weight: 700;
  font-size: 1.5vh;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px; /* 버튼 사이 간격 설정 */
  transition: background-color 0.3s, border-color 0.3s; /* 부드러운 색상 전환 효과 */
`;


function TypeBtn({ onClick, selected, children, value }) {
  return (
    <StyledBtn
      selected={selected}
      onClick={() => onClick(value)} // value를 전달하도록 수정
    >
      {children}
    </StyledBtn>
  );
}

export default TypeBtn;
