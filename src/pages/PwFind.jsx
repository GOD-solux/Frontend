import Box from "../components/Box";
import Button from "../components/Button";
import styled from "styled-components";
import Header from "../components/Header";
import Id from "../assets/id.png";
import Pw from "../assets/pw.png";
import CheckPw from "../assets/check.png";

const Wrapper = styled.div`
  width: 100%;

  //임시 중앙정렬
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  //임시 height
  height: 700px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0px 30px 0px;
`;


const Textarea = styled.input`
    font-size: 16px; 
    line-height: 20px;
    border: none;
    border-radius: 3px;
    margin: 5px 20px;
    padding: 10px;
    resize: none;
    background-color: #EEEEEE;
    width: 350px; 
    height: 45px;
    outline: none;
      
    &::placeholder {
      font-size: 13px; 
      color: #9E9E9E;
      background: url(${props => props.img || Id}) no-repeat left center; 
      background-size: contain; // 이미지 크기 조정
      padding-left: 30px; // 이미지와 텍스트 사이 여백
      line-height: 1.5;  //텍스트와 이미지 세로 정렬
    }

`;

const NewButton = styled(Button)`
  &&& {
    padding: 10px 30px;
    font-size: 14px;
    margin: 7px 0px 15px 0px;
  }
`;

const Divider = styled.div`
  width: 350px;
  height: 1px;
  background-color: #CCC;
  margin: 10px 0;
`;


function PwFind(props) {

    const { title, onClick, disabled, className } = props;

    return (
      <Wrapper>
        <Header/>
        <Box>
            <Text>비밀번호 재설정</Text>
            <Textarea type="text" img={Id} placeholder="아이디"/>

            <NewButton
              title="아이디 확인"
              onClick={onClick}
              disabled={disabled}
            />

            <Divider />

            <Textarea type="password" img={Pw} placeholder="비밀번호" maxLength={12}/>
            <Textarea type="password" img={CheckPw} placeholder="비밀번호 확인" maxLength={12}/>

            <NewButton
              title="비밀번호 재설정"
              onClick={onClick}
              disabled={disabled}
            />
        </Box>
      </Wrapper>
    );
  }
  
  export default PwFind;