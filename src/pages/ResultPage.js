import styled from "styled-components";
import ResultBox from "../components/ResultPage/ResultBox";
import AgainBtn from "../components/ResultPage/AgainBtn";
import Header from "../components/Header";

import {useNavigate,useParams} from 'react-router-dom';
import {activity,links} from "../components/ResultPage/results";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
 

  height: 700px;
`;


const Container = styled.div`
  width: 100%;
  height:90%;
  background-color: #F3F3F3;
  border-radius: 10px;


  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 10px;


`;

const ReWrapper=styled.div`
    width:20vw;
    height:12vh;

    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
`;

const Text=styled.h3`
    text-decoration:underline;
    font-weight:600;
    text-underline-offset:2px;
    // font-size:20px;
`;

const Culture = styled.p`
  width: 100%;
  height: 60%;
  font-size: 13px;
  background-color: #D8E5FF;
  border-radius: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  position: relative;
  cursor: pointer;

  &:hover span {  
    background-size: 100% 2px;
    background-image: linear-gradient(#000, #000);
    background-repeat: no-repeat;
    background-position: left bottom;
  }

  span {
    padding-bottom: 2px;
    background-size: 0 2px;
    transition: background-size 0.5s;
  }
`;

const CultureWrapper=styled.div`
    width:50%;
    height:70%;

    display:flex;
    align-items:center;
    justify-content: center;
    gap:5%;
`;






function ResultPage(){

const navigate = useNavigate(); 
const {resultId}=useParams();

const handleAgainClick = () => {
  navigate(`/typeTest/1`);
};

const handleRecommend1=()=>{
  navigate(`${links[resultId][0]}`)
};

const handleRecommend2=()=>{
  navigate(`${links[resultId][1]}`)
};

    return(
        <Wrapper>
            <Header text="유형테스트"/>
            <Container>
                <ResultBox/>
                  <ReWrapper>
                    <Text>추천 문화 생활</Text>
                    <CultureWrapper>
                        <Culture onClick={handleRecommend1}>
                          <span>{activity[resultId][0]}</span>
                        </Culture>
                        <Culture onClick={handleRecommend2}>
                            <span>{activity[resultId][1]}</span>
                        </Culture>
                    </CultureWrapper>
                </ReWrapper>
                <AgainBtn onClick={handleAgainClick}/>
            </Container>
        </Wrapper>
    );
}

export default ResultPage;