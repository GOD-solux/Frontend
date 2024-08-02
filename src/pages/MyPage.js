// MyPage.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MyProfile from "../components/MyPage/MyProfile";
import profileImage from "../assets/profile.png";
import ProfileBtn from "../components/MyPage/ProfileBtn";
import MyCulture from "../components/MyPage/MyCulture";
import WritingList from "../components/MyPage/WritingList";
import PlusBtn from "../components/MyPage/PlusBtn";
import LikesList from "../components/MyPage/LikesList";
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
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
  margin-top: 40px;
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
  border-radius: 50%;
`;

const WritingsWrapper = styled.div`
  width: 70%;
  align-items: center;
  justify-content: center; 
  height: 70vh;
  flex-direction: row;
  margin-top: 50px;
`;

const WritingWrapper = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 70%;
  flex-direction: row;
`;

const Hr = styled.hr`
  width: 70%;
  border: 0;
  height: 0.5px;
  background-color: #dcdcdc;
  margin: 20px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H1 = styled.h1`
  font-weight: bold;
  font-size: 14px;
`;

function MyPage() {
  const navigate = useNavigate(); 
  const [image, setImage] = useState(profileImage);
  const [myProfile, setMyProfile] = useState([]);
  const [myCulture, setMyCulture] = useState([]);
  const [writingList, setWritingList] = useState([]);
  const [writingLikesList, setWritingLikesList] = useState([]);

  // localStorage에서 resultId 가져오기
  const resultId = localStorage.getItem('resultId');
  
  // resultId에 따른 문화 유형 업데이트
  useEffect(() => {
    if (resultId) {
      // resultId에 따라 myProfile 및 myCulture 상태 업데이트 (여기서는 임의로 데이터 설정)
      fetch('http://localhost:3000/data/myPageData.json')
        .then(res => res.json())
        .then(data => {
          const updatedProfile = data.map(profile => ({
            ...profile,
            muntourType: resultId // resultId를 사용하여 유형 업데이트
          }));
          setMyProfile(updatedProfile);
          setMyCulture(updatedProfile); // 이 예제에서는 myProfile과 동일하게 설정
        });
    }
  }, [resultId]);

  // 내가 쓴 글 목록 (mock data)
  useEffect(() => {
    fetch('http://localhost:3000/data/myWritingsData.json')
      .then(res => res.json())
      .then(data => {
        setWritingList(data);
      });
  }, []);

  // 내가 공감한 글 (mock data)
  useEffect(() => {
    fetch('http://localhost:3000/data/myLikesData.json')
      .then(res => res.json())
      .then(data => {
        setWritingLikesList(data);
      })
      .catch(error => {
        console.error('Error fetching likes data:', error);
      });
  }, []);

  // 프로필 사진 수정
  const handleProfileClick = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleWritings = () => {
    navigate(`/myWritings`);
  };

  const handleLikes = () => {
    navigate(`/myLikes`);
  };

  return (
    <Wrapper>
      <Header text="마이페이지" login={props.login} setLogin={props.setLogin} />
      <ProfileWrapper>
        <ProfileImageWrapper>
          <ProfileImage className="profile-image" src={image} alt="Profile" />
          <label htmlFor="profile-input"> 
            <ProfileBtn>프로필 수정</ProfileBtn>
          </label>
          <input
            id="profile-input"
            type="file"
            style={{ display: 'none' }}
            onChange={handleProfileClick}
          />
        </ProfileImageWrapper>
        {myProfile.map(p => (
          <MyProfile 
            key={p.id}
            memberId={p.memberId}
            nickname={p.nickname}
            type={p.muntourType} // 업데이트된 유형 사용
          />
        ))}
      </ProfileWrapper>
      <Hr />
      <CultureWrapper>
        {myCulture.map(p => (
          <MyCulture
            key={p.id}
            muntourType={p.muntourType} // 업데이트된 유형 사용
          />
        ))}
      </CultureWrapper>
      <WritingsWrapper>
        <WritingWrapper>
          <HeaderWrapper>
            <H1>내가 쓴 글 목록</H1>
            <PlusBtn onClick={handleWritings}>더 보기</PlusBtn>
          </HeaderWrapper>
          <WritingList writings={writingList} />
        </WritingWrapper>
        <WritingWrapper>
          <HeaderWrapper>
            <H1>공감한 글 목록</H1>
            <PlusBtn onClick={handleLikes}>더 보기</PlusBtn>
          </HeaderWrapper>
          <LikesList likes={writingLikesList} /> 
        </WritingWrapper>
      </WritingsWrapper>
    </Wrapper>
  );
}

export default MyPage;
