import styled from "styled-components";
import React from "react";


const Wrapper = styled.div`
  width: 100%;
  // flex-direction: column;
  text-align:center;
  align-items: center;
  gap: 500px;
  height: 100%;
  margin-top:50px;
  margin-bottom:200px;
`;

const WritingBox = styled.div`
  height: 200px;
  background-color: #eeeeee;
  width: 80%;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
`;


function WritingsPage() {
    return(
        <Wrapper>
          <Header/>
            <WritingBox>게시글1</WritingBox>
            <WritingBox>게시글2</WritingBox>
            <WritingBox>게시글3</WritingBox>
            <WritingBox>게시글4</WritingBox>
            <WritingBox>게시글5</WritingBox>
            <WritingBox>게시글6</WritingBox>
            <WritingBox>게시글7</WritingBox>
            {/* <WritingBox>게시글7</WritingBox>
            <WritingBox>게시글7</WritingBox>
            <WritingBox>게시글7</WritingBox>
            <WritingBox>게시글7</WritingBox>
            <WritingBox>게시글7</WritingBox>
            <WritingBox>게시글7</WritingBox>
            <WritingBox>게시글7</WritingBox>
            <WritingBox>게시글7</WritingBox>
            <WritingBox>게시글7</WritingBox>
            */}
        </Wrapper>
    )
}
export default WritingsPage;