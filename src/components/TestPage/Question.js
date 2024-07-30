import styled from "styled-components";
import questionImage from "../../assets/question1.png";
import { useNavigate, useParams } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  height: 30vh;
`;

const Quest=styled.div`
    width:100%;
    height:35%;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:10%;

    font-size:20px;
    font-weight:300;
`;

const Picture=styled.img`
    display: flex;
    justify-content: center;
    width: 30%;
    height: 60%;
    // margin-top: -65px;
    // border-radius: 50%;
`;

function Question({children}){

    const { questionNumber } = useParams();

    return(
        <Wrapper>
           <Quest>{children}</Quest>
           {/* <Picture src={questionImage} alt="pic" /> */}
        </Wrapper>
    )

}

export default Question;