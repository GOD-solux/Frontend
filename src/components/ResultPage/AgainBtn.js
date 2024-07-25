import styled from "styled-components";
import againImage from "../../assets/again.png";//버튼에 삽입해야.

const StyledBtn = styled.div`
    background: #85A1E8;
    border-radius: 70px;

    width: 6vw;
    height: 5vh;

    color: white;
    font-weight: 600;
    font-size: 15px; 
    cursor: pointer;

    display: flex; /* Flexbox 레이아웃을 사용하여 중앙 정렬 */
    align-items: center;
    justify-content: center;
`;

// 다시하기
function AgainBtn({onClick}) {
    return (
        <StyledBtn onClick={onClick}>다시하기</StyledBtn>
    );
}

export default AgainBtn;
