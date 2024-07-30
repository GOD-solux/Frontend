import styled from "styled-components";
import Header from "../components/Header";
import Swiper from "../components/Mainpage/SwipeBanner";
import Search from "../assets/search.png";
import Card from "../components/Mainpage/Card";
import Performance from "../assets/performance.jpg";
import Exhibit from "../assets/exhibit.png";
import Sport from "../assets/sport.jpg";
import Book from "../assets/book.jpg";
import Community from "../assets/community.png";
import Typetest from "../assets/typetest.png";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
`;

const SearchBar = styled.form`
  border: 2px solid #ACACAC; 
  border-radius: 50px;
  width: 95%;
  height: 45px;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  /* 검색 입력창 스타일 */
  input {
    border: 0;
    background-color: white; /* 배경색을 흰색으로 설정 */
    width: calc(100% - 100px); // 검색 시작 구간
    height: 100%;
    font: 25px #ACACAC 300;
    outline: none;
    padding: 20px 0px; /* 입력창 내부 왼쪽 여백 추가 */

    &::placeholder {
      font-size: 18px; 
      color: #ACACAC;
    }
  }
  
  /* 검색 이모지 스타일 */
  img {
    width: 30px;
    position: absolute; 
    left: 10px; 
    cursor: pointer;
  }
`;

const UCard = styled(Card)`
  &&& {
    background-image: ${props => props.bimg ? `url(${props.bimg})` : "none"};
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 10px;
    font-size: 24px;
    font-weight: bold;
    position: relative; 
  }

  /* title 스타일 */
  &::before {
    content: "${props => props.title}";
    position: absolute;
    top: 25px; 
    left: 30px; 
    font-size: 25px; 
    font-weight: 600;
    color: ${props => props.tcolor};
  }

  &::after {
    content: "바로가기";
    position: absolute;
    top: 60px; 
    left: 30px; 
    font-size: 25px; 
    font-weight: 600;
    color: ${props => props.tcolor};
  }
`;

const MCard = styled(Card)`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    width: 250px;
    height: 280px;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
                      ${props => `url(${props.bimg})` || "none"};
    background-size: 250px 280px;
    position: relative; 
    border: 2px solid #cecdce;
    border-radius: 10px;
    transition: all 0.3s ease; 
    box-shadow: rgba(165, 163, 163, 0.9) 0px 3px 5px 1px; 

    &:hover {
      transform: scale(1.05); 
      box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 10px -5px;
    }

    /* title 스타일 */
    &::before {
      content: "${props => props.title}";
      position: absolute;
      top: 80%; 
      left: 50%; 
      transform: translate(-50%, -50%); /* title 가운데 정렬 */
      font-size: 25px;
      font-weight: bold;
      color: white;
      
    }
  }
`;


const CardContainer1 = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  gap: 25px;
`;


const CardContainer2 = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`;

const CardContainer3 = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
`;

const Text = styled.div`
  font-size: 21px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const Divider = styled.div`
  flex-grow: 1;
  height: 1px;
  margin-left: 10px;
  border: 0.5px solid #D4D4D4;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  gap: 10px;
`;

function Mainpage(props) {

  const { title, className } = props;

  return (
    <Wrapper>
      <Header />
      <SearchBar>
        <input type="search" placeholder="search..." />
        <img src={Search} alt="search" />
      </SearchBar>

      <CardContainer1>
        <UCard 
          bcolor="#85A1E8" tcolor="white" nav="/community" title="문화 커뮤니티" bimg={Community} />
        <UCard bcolor="#E0E9FF" tcolor="black" nav="/typeTest/1" title="문화 유형 테스트" bimg={Typetest} />
      </CardContainer1>
      
      <Line>
        <Text>문화 생활 더보기</Text>
        <Divider />
      </Line>
      <CardContainer2>
        <MCard nav="/culturelist/performance"
          title="공연"
          bimg={Performance}
        />
        <MCard nav="/culturelist/exhibition" 
          title="전시"
          bimg={Exhibit}
        />
        <MCard nav="/culturelist/sport" 
          title="스포츠"
          bimg={Sport}
        />
        <MCard nav="/culturelist/book" 
          title="도서"
          bimg={Book}
        />
      </CardContainer2>

      <Line>
        <Text>이달의 추천 문화</Text>
        <Divider />
      </Line>

      <CardContainer3>
        <Swiper />
      </CardContainer3>

      <Footer/>

    </Wrapper>
  );
}

export default Mainpage;
