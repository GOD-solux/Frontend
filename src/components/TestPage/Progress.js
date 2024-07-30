import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
`;

const Bar=styled.div`
    width:25vw;
    height:4vh;
    border:1px solid;
    border-color:#606060;
    border-radius: 50px;
    display:flex;
    align-items: center;
    margin-top:30px;
    //padding: 0 10px; /* 내부 여백 추가 */

`;

const ColorBar=styled.div`
    width:10vw;
    height:3.5vh;
    border-radius:50px;
    background-color:#C2E2FF;
    gap:2px;
`;

const Regular=styled.div`
    width:150px;
    height:50px;

    font-weight:200;
    font-color:#606060;
    font-size:15px;
    display: flex;
    align-items: center; 
    justify-content: center;
    margin-left: 1px; /* ColorBar와 Regular 사이 간격 */
`;

function Progress(){
    return(
        <Wrapper>
            <Bar>
                <ColorBar></ColorBar>
                <Regular>~test in progress~</Regular>
            </Bar>
        </Wrapper>
    )

}

export default Progress;