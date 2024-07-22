import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
//   border-bottom: 1px solid gray;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const TestLetter = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;

const Navi = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
`;

const NomalText = styled.div`
  font-size: 15px;
  margin-right: 5px;
`;

function TestHeader({ login }) {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo>MUNTOUR</Logo>
        <TestLetter>유형테스트</TestLetter>
      </LogoWrapper>
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

export default TestHeader;
