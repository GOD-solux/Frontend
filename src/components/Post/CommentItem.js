import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    border-radius: 8px;
    padding: 10px;
    background-color: #EDEDED;
`;

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
`;

const ProfileImage = styled.img`
    display: block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
`;

const UserId = styled.div`
    line-height: 25px;
    font-size: 15px;
`;

const Content = styled.div`
    font-size: 15px;
    margin-bottom: 10px;
`;

const Date = styled.div`
    color: #9B9B9B;
    font-size: 12px;
`;

function CommentItem() {
    return(
        <Wrapper>
            <UserContainer>
                <ProfileImage></ProfileImage>
                <UserId>user</UserId>
            </UserContainer>

            <Content>내용</Content>

            <Date>2024/07/00 12:00</Date>
        </Wrapper>
    );
}

export default CommentItem;