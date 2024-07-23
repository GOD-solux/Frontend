import styled from "styled-components";
import TestHeader from "../components/TestPage/TestHeader";
import ResultBox from "../components/ResultPage/ResultBox";
import Recommend from "../components/ResultPage/Recommend";
import AgainBtn from "../components/ResultPage/AgainBtn";

import {useNavigate} from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;

  //임시 중앙정렬
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
 

  //임시 height
  height: 700px;
`;


const Container = styled.div`
  width: 100%;
  height:90%;
  background-color: #F3F3F3;
  border-radius: 10px;
//   padding: 10px;

  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 10px;

  //임시
`;


function ResultPage(){

const navigate = useNavigate(); 

const handleAgainClick = () => {
  navigate(`/typeTest/1`);
};

    return(
        <Wrapper>
            <TestHeader/>
            <Container>
                <ResultBox/>
                <Recommend/>
                <AgainBtn onClick={handleAgainClick}/>
            </Container>
        </Wrapper>
    );
}

export default ResultPage;