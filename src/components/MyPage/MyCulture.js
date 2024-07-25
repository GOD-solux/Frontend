import styled from "styled-components";
import cultureImage from "../../assets/mytypeA.png"; // 경로 수정 필요할 수 있음

const Wrapper = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const TypeBox = styled.div`
  height: 50%;
  background-color: #eeeeee;
  display: flex;
  margin-top: 1vh;
  width: 100%;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  justify-content: flex-start; /* 왼쪽 정렬 */
  padding-left: 20px; /* 왼쪽 여백 추가 */
`;

const H1 = styled.h1`
  font-weight: bold;
  font-size: 14px;
`;

const CultureImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px; /* 이미지와 텍스트 사이의 간격 추가 */
`;

function MyCulture() {
  return (
    <Wrapper>
      <H1>나의 문화 유형</H1>
      <TypeBox>
        <CultureImage src={cultureImage} alt="CultureTypeA" />
        사색가형 | 어쩌고 저쩌고~
      </TypeBox>
    </Wrapper>
  );
}

export default MyCulture;
