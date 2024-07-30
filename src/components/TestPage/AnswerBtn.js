import styled from "styled-components";

const StyledBtn = styled.div`
  background: ${props => props.selected ? '#6b88d1' : '#85a1e8'};
  border-radius: 70px;
  border: none;
  outline: none;
  width: 7vw;
  height: 6vh;
  color: white;
  font-weight: 600;
  font-size: 2.5vh;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  // margin-top: 5%;
  transition: background 0.3s;
`;

const AnswerBtn = ({ onClick, selected, children }) => {
  return (
    <StyledBtn
      onClick={onClick}
      selected={selected}
    >
      {children}
    </StyledBtn>
  );
};

export default AnswerBtn;
