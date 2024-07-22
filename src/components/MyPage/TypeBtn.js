import React, { useState } from 'react';
import styled from 'styled-components';

const StyledBtn = styled.div`
  background: ${props => props.backgroundColor}; /* 동적으로 배경색 설정 */
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
  border-color: #EFF5FF;
  width: 6vw;
  height: 4vh;
  color: black;
  font-weight: 700;
  font-size: 1.5vh;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px; /* 버튼 사이 간격 설정 */
`;

function TypeBtn({ children }) {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleClick = () => {
    setBackgroundColor(backgroundColor === 'white' ? '#EFF5FF' : 'white');
  };

  return (
    <StyledBtn
      backgroundColor={backgroundColor}
      onClick={handleClick}
    >
      {children}
    </StyledBtn>
  );
}

export default TypeBtn;
