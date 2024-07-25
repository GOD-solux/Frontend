import styled from "styled-components";

const StyledBtn = styled.div`
    
    width: 7vw;
    height: 6vh;

    font-weight: 600;
    font-size: 2vh; 
    cursor: pointer;

    display: flex; /* Flexbox 레이아웃을 사용하여 중앙 정렬 */
    align-items: center;
    justify-content: center;
    gap:1px;
    margin: 0 100px; /* 버튼 사이의 간격 조절 */
`;

// const Wrapper=styled.div`
//     width: 100%;
//     height: 8vh;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-top: 1%;
    
// `;

// Yes,No
function OrderBtn({ onClick, children }) {
    return <StyledBtn onClick={onClick}>{children}</StyledBtn>;
  }

export default OrderBtn;
