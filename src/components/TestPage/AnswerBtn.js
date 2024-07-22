import styled from "styled-components";
import React, { useState } from 'react';

const StyledBtn = styled.div`
  background: ${props => props.backgroundColor};
  border-radius: 70px;
  border: none;
  outline: none;
  width: 7vw;
  height: 6vh;

  color: white;
  font-weight: 600;
  font-size: 2.5vh;
  cursor: pointer;

  display: flex; /* Flexbox 레이아웃을 사용하여 중앙 정렬 */
  align-items: center;
  justify-content: center;

  margin-top:5%;
`;


// Yes,No
function AnswerBtn({children}) {
    const [backgroundColor, setBackgroundColor] = useState('#85a1e8');

  const handleClick = () => {
    setBackgroundColor(backgroundColor === '#85a1e8' ? '#6b88d1' : '#85a1e8');
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

export default AnswerBtn;
