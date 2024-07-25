import styled from "styled-components";

const Wrapper = styled.div`
  width: 28%;
  height: 400px;

  border-radius: 15px;
  background-color: #f2f6ff;

  padding: 20px;

  display: flex;
  flex-direction: column;

  gap: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 280px;
`;

const Date = styled.div`
  width: 100%;
  text-align: center;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
`;

function CultureItem() {
  return (
    <Wrapper>
      <Image />
      <Date>2024.07.19 ~ 2024.09.13</Date>
      <Title>어쩌구저쩌구전시</Title>
    </Wrapper>
  );
}

export default CultureItem;
