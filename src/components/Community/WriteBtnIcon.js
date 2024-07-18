import styled from "styled-components";

const Wrapper = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  background-color: white;
  border: 2px solid #606060;

  position: fixed;
  right: 60px;
  bottom: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    background-color: #f1f4fa;
  }
`;

function WriteBtnIcon() {
  return (
    <Wrapper>
      <svg
        width="30"
        height="30"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.7474 15.4737L28.7368 17.4632L8.62105 37.5789H6.63158V35.5895L26.7474 15.4737ZM34.7053 2.21053C34.2632 2.21053 33.6 2.43158 33.1579 2.87368L29.1789 6.85263L37.3579 15.2526L41.3368 11.0526C42.2211 10.1684 42.2211 8.8421 41.3368 7.95789L36.2526 2.87368C35.8105 2.43158 35.1474 2.21053 34.7053 2.21053ZM26.7474 9.28421L2.21053 33.6V42H10.6105L34.9263 17.4632L26.7474 9.28421ZM11.0526 0V6.63158H17.6842V11.0526H11.0526V17.6842H6.63158V11.0526H0V6.63158H6.63158V0H11.0526Z"
          fill="#545454"
        />
      </svg>
    </Wrapper>
  );
}

export default WriteBtnIcon;
