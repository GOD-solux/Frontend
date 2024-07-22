import styled from "styled-components";

const Wrapper=styled.div`
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

const Culture=styled.div`
    width:100%;
    height:60%;

    font-size:13px;
    background-color:#D8E5FF;
    border-radius:20px;
    font-weight:bold;

    display:flex;
    align-items:center;
    justify-content: center;


`;

const CultureWrapper=styled.div`
    width:50%;
    height:70%;

    display:flex;
    align-items:center;
    justify-content: center;
    gap:5%;
`;




function Recommend(){
    return(
        <Wrapper>
            <Text>추천 문화 생활</Text>
            <CultureWrapper>
                <Culture>{types[result][0]}</Culture>
                <Culture>도서</Culture>
            </CultureWrapper>
        </Wrapper>

    );
}

export default Recommend;