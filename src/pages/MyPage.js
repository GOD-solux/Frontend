// MyPage.js
import React from "react";
import styled from "styled-components";
import MyPageHeader from "../components/MyPage/MyPageHeader";
import MyProfile from "../components/MyPage/MyProfile";
import profileImage from "../assets/profile.png";
import ProfileBtn from "../components/MyPage/ProfileBtn";
import MyCulture from "../components/MyPage/MyCulture";
import WritingList from "../components/MyPage/WritingList";


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  height: 1000px;
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
  gap: 20px;
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

const WritingWrapper = styled.div`
  width: 70%;
  align-items: center;
  justify-content: center;
  height: 70%;
  margin-top: -70px;
  flex-direction: row;
`;

const Hr = styled.hr`
  margin-top: -90px;
  width: 70%;
  border: 0;
  height: 0.5px;
  background-color: #dcdcdc;
`;

function MyPage() {
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
      <WritingWrapper>
        <WritingList>내가 쓴 글 목록</WritingList>
        <WritingList>공감한 글 목록</WritingList>
      </WritingWrapper>
    </Wrapper>
  );
}

export default MyPage;
