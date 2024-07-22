import styled from "styled-components";
import {useNavigate,useParams} from 'react-router-dom';
import resultImage from "../../assets/myresultA.png";
import {types,descriptions,images} from "../../components/ResultPage/results";

const Wrapper=styled.div`
    height:50vh;
    width:80vw;

    display:flex;
    align-items:center;
    flex-direction: column;
    margin-top:5%;
`;

const H1=styled.h1`
    font-size:20px;
    font-weight:600;
`;

const ResultImage = styled.img`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin : 3%;
`;

const Box=styled.div`
    width:30%;
    height:70%;

    background-color:#A0B6EE;
    border-radius:30px;

    font-size:14px;
    font-weight:400;
    color:white;
    letter-spacing:0.5px;
    line-height:18px;

    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;

    margin-top:1.5%;
    margin-bottom:1.5%;

    gap:15px;


`;

function ResultBox(){
    const {result}=useParams();
    return(
        <Wrapper>
            <H1>당신의 유형은?</H1>
            <Box>
                <H1>{types[result]}</H1>
                <ResultImage src={images[result]} alt="types" />
                {/* 정적인 활동과 감상을 좋아하는 사색가.<br/>
                실내에서의 문화생활이 잘 어울립니다. */}
                {descriptions[result]}
            </Box>
            <H1>입니다.</H1>
        </Wrapper>
    );
}

export default ResultBox;