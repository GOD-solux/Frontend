import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  //border-bottom: 1px solid gray;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const Navi = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const NomalText = styled.div`
  cursor: pointer;
`;

function Header({ login }) {
  return (
    <Wrapper>
      <Logo>MUNTOUR</Logo>
      {login ? (
        <Navi>
          <NomalText>마이페이지</NomalText>
          <NomalText>로그아웃</NomalText>
        </Navi>
      ) : (
        <Navi>
          <NomalText>로그인</NomalText>
          <NomalText>회원가입</NomalText>
        </Navi>
      )}
    </Wrapper>
  );
}

export default Header;
