import styled from 'styled-components';


const StyledBtn = styled.div`
    background:none;
    border-width: 0;

    width: 5vw;
    height: 1vh;

    color: black;
    font-weight: 600;
    font-size: 10px; 
    cursor: pointer;

    display: flex; /* Flexbox 레이아웃을 사용하여 중앙 정렬 */
    align-items: center;
    justify-content: center;
`;

// 더보기 버튼
function PlusBtn({children,onClick}) {
    return (
        <StyledBtn
            onClick={onClick}
        >
            {children}
        </StyledBtn>
    );
}

export default PlusBtn;
