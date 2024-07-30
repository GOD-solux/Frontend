import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Muntour from "../assets/logo.png";

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  //border-bottom: 1px solid gray;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const Text = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: end;
`;

const Logo = styled.div`
  font-size: 40px;
  font-weight: 900;
  cursor: pointer;
  letter-spacing: 0.1px;
`;

const LogoImg = styled.img`
  font-size: 30px;
  font-weight: bold;
  height: 65px;
  cursor: pointer;
`;

const PageName = styled.div`
  padding-bottom: 3px;
`;

const Navi = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  label {
    cursor: pointer;
  }
`;

const NomalText = styled.div`
  cursor: pointer;
`;

function Header({ login }) {

  let navigate = useNavigate();
  
  return (
    <Wrapper>
      <Text>
        <Logo
          onClick={() => {
            navigate("/");
          }}
        >
          MUNTOUR
        </Logo>
        <PageName>{text}</PageName>
      </Text>

      {login ? (
        <Navi>
          <NomalText>마이페이지</NomalText>
          <NomalText>로그아웃</NomalText>
        </Navi>
      ) : (
        <Navi>
          <label
            id="login"
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </label>
          <label
            id="signup"
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            회원가입
          </label>
        </Navi>
      )}
    </Wrapper>
  );
}

export default Header;
