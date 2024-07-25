// MyPage.js
import React from "react";
import styled from "styled-components";
import MyPageHeader from "../components/MyPage/MyPageHeader";
import MyProfile from "../components/MyPage/MyProfile";
import profileImage from "../assets/profile.png";
import ProfileBtn from "../components/MyPage/ProfileBtn";
import MyCulture from "../components/MyPage/MyCulture";
import WritingList from "../components/MyPage/WritingList";
import PlusBtn from "../components/MyPage/PlusBtn";


import {useNavigate} from 'react-router-dom';


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 40px;
  height: 800px;
`;

const ProfileWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 185px;
  gap: 20px;
  flex-direction: row;
`;

const CultureWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  gap: 50px;
  flex-direction: row;
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ProfileImage = styled.img`
  display: flex;
  justify-content: center;
  width: 85px;
  height: 90px;
  margin-top: -65px;
  border-radius: 50%;
`;

const WritingsWrapper = styled.div`
  width: 70%;
  align-items: center;
  justify-content: center; 
  height: 70%;
  flex-direction: row;

  margin-top:50px;
`;

const WritingWrapper = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 70%;
  // margin-top: -70px;
  flex-direction: row;
`;

const Hr = styled.hr`
  // margin-top: -90px;
  width: 70%;
  border: 0;
  height: 0.5px;
  background-color: #dcdcdc;
  margin:20px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  // margin-top:40px;
`;

const H1 = styled.h1`
  font-weight: bold;
  font-size: 14px;
  // margin-bottom: 7px;
`;

function MyPage() {

  const navigate = useNavigate(); 

  const handleWritings = () => {
    console.log("writings");
    navigate(`/myWritings`);
  };

  const handleLikes = () => {
    console.log("likes");
    navigate(`/myLikes`);
  };



  return (
    <Wrapper>
      <MyPageHeader/>
      <ProfileWrapper>
        <ProfileImageWrapper>
          <ProfileImage className="profile-image" src={profileImage} alt="Profile" />
          <ProfileBtn>프로필 수정</ProfileBtn>
        </ProfileImageWrapper>
        <MyProfile />
      </ProfileWrapper>
      <Hr />
      <CultureWrapper>
        <MyCulture />
      </CultureWrapper>
      <WritingsWrapper>
        <WritingWrapper>
          <HeaderWrapper>
            <H1>내가 쓴 글 목록</H1>
            <PlusBtn onClick={handleWritings}>더 보기</PlusBtn>
          </HeaderWrapper>
          <WritingList/>
        </WritingWrapper>
        <WritingWrapper>
          <HeaderWrapper>
            <H1>공감한 글 목록</H1>
            <PlusBtn onClick={handleLikes}>더 보기</PlusBtn>
          </HeaderWrapper>
          <WritingList/>
        </WritingWrapper>
      </WritingsWrapper>
    </Wrapper>
  );
}

export default MyPage;
