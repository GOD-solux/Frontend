import styled from 'styled-components';

const StyledBtn = styled.div`
    background: #A3B7EA;
    border-radius: 5px;
    border-width: 0;

    width: 5vw;
    height: 3vh;

    color: white;
    font-weight: 700;
    font-size: 1.5vh; 
    cursor: pointer;

    display: flex; /* Flexbox 레이아웃을 사용하여 중앙 정렬 */
    align-items: center;
    justify-content: center;
`;

// 비밀번호 변경 //관심분야 수정
function ChangeBtn({children,onClick}) {
    return (
        <StyledBtn onClick={onClick}>{children}</StyledBtn>
    );
}

export default ChangeBtn;
