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

// 프로필 수정
function PlusBtn({children}) {
    return (
        <StyledBtn>{children}</StyledBtn>
    );
}

export default PlusBtn;
