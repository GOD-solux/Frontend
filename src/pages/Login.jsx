import { useNavigate } from "react-router-dom";
import Box from "../components/Box";
import Button from "../components/Button";
import styled from "styled-components";
import Header from "../components/Header";
import Id from "../assets/id.png";
import Pw from "../assets/pw.png";
import Idcheck from "../assets/idcheck.png";
import { useState } from "react";
import axios from "axios";
import TextInput from "../components/TextInput";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  height: 700px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 25px;
  margin: 7px 0px 25px 0px;
`;

const Textarea = styled.input`
  font-size: 16px;
  line-height: 20px;
  border: none;
  border-radius: 15px;
  margin: 5px 20px;
  padding: 10px;
  resize: none;
  background-color: #eeeeee;
  width: 350px;
  height: 45px;
  outline: none;

  &::placeholder {
    font-size: 13px;
    color: #9e9e9e;
    background: url(${(props) => props.img || Id}) no-repeat left center;
    background-size: contain;
    padding-left: 30px;
    line-height: 1.5;
  }
`;

const LoginButton = styled(Button)`
  &&& {
    padding: 13px 70px;
    margin: 0px 0px 20px 0px;
    font: bold 20px;
  }
`;



const IdCheck = styled.input`
  appearance: none;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
  border-color: #85a1e8;
  border-width: 3px;
  &:checked {
    border-color: transparent;
    background-image: url(${Idcheck});
    background-size: 100%;
    background-repeat: no-repeat;
    border-color: #85a1e8;
    border-width: 3px;
  }
`;

const Find = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const FindLabel = styled.label`
  cursor: pointer;
  font-size: 16px;
  margin: 5px 10px 5px 0px;
  color: #ccc;

  &:hover {
    color: #555;
  }
`;

const Divider = styled.div`
  width: 1.8px;
  height: 18px;
  margin: 5px 9px 0px 0px;
  background-color: #ccc;
`;

const ModalComponent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const CloseButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #85a1e8;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #6a8bd8;
  }
`;

function Login(props) {
  const { title, onClick, disabled, className } = props;
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const login = () => {
    if (!id || !password) {
      setModalMessage("아이디와 비밀번호를 모두 입력해주세요.");
      setModal(true);
      return;
    }

    axios
      .post("http://localhost:3000/auth/sign-in", {
        id: id,
        password: password,
      })
      .then((response) => {
        console.log("user token", response.data.jwt);
        localStorage.setItem("token", response.data.jwt);
        navigate("/");
      })
      .catch((error) => {
        console.log("id:" + id);
        console.log("pw:" + password);
        console.log(error);
        setModalMessage("로그인에 실패했습니다. 다시 시도해주세요.");
        setModal(true);
      });
  };

  return (
    <Wrapper>
      <Header />
      <Box>
        <Text>로그인</Text>
        <Textarea
          type="text"
          img={Id}
          placeholder="아이디"
          value={id}
          onChange={(event) => {
            setId(event.target.value);
          }}
        />
        <Textarea
          type="password"
          img={Pw}
          placeholder="비밀번호"
          maxLength={12}
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <CheckDiv>
          <IdCheck type="checkbox" id="check" />
          <label htmlFor="check">아이디 저장</label>
        </CheckDiv>
        <LoginButton
          title="로그인"
          onClick={() => {
            login();
          }}
          disabled={disabled}
        />
        <Find>
          <FindLabel id="login" onClick={() => navigate("/pw-find")}>
            비밀번호 찾기
          </FindLabel>
          <Divider />
          <FindLabel id="signup" onClick={() => navigate("/sign-up")}>
            회원가입
          </FindLabel>
        </Find>
      </Box>

      {modal && (
        <ModalComponent>
          <ModalContent>
            <p>{modalMessage}</p>
            <CloseButton
              onClick={() => {
                setModal(false);
              }}
            >
              닫기
            </CloseButton>
          </ModalContent>
        </ModalComponent>
      )}
    </Wrapper>
  );
}

export default Login;
