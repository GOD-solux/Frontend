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

  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 10px -5px;
  }
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

function CultureItem({ culture }) {
  return (
    <Wrapper
      onClick={() =>
        culture.url
          ? window.open(culture.url, "_blank", "noopener, noreferrer")
          : window.open(
              "https://tickets.interpark.com/",
              "_blank",
              "noopener, noreferrer"
            )
      }
    >
      <Image src={culture.imageObject} />
      {/* <Date>{culture.period}</Date> */}
      <Date>
        {(() => {
          switch (culture.category) {
            case "스포츠":
              return culture.venue;
            case "도서":
              return `${culture.subjectCategory} - ${culture.author}`;
            default:
              return culture.period;
          }
        })()}
      </Date>
      <Title>{culture.title}</Title>
    </Wrapper>
  );
}

export default CultureItem;
