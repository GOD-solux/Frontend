import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  padding: 20px 0;
  background-color: #ffffff;
  text-align: left;
  font-size: 14px;
  color: #333;
  border-top: 1px solid #333;
  margin-top: 60px;
`;

function Footer() {
  return <Wrapper>© God7.</Wrapper>;
}

export default Footer;
