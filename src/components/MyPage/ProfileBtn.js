import styled from 'styled-components';

const StyledBtn = styled.div`
    background: #A8A8A8;
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

// 프로필 수정
function ProfileBtn({children}) {
    return (
        <StyledBtn>{children}</StyledBtn>
    );
}

export default ProfileBtn;
