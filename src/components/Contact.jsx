import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "./devices";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #1f4743 100%);
`;

const Title = styled.h1`
  color: white;
  font-size: 4em;

  @media ${device.mobileS} {
    font-size: 3em;
  }
`;

const Desc = styled.p`
  max-width: 60%;
  color: white;
  padding: 3em 0;
  line-height: 2em;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
`;

const Anchor = styled.div`
  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
`;
const Alink = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contact = () => {
  return (
    <Wrapper>
      <Title>Contact</Title>
      <Desc>
        Any ideas or project or collaboration in mind? Please reach me at:
        <ContactContainer>
          <Anchor>
            <Alink href="mailto:yaltharullist@gmail.com">
              <img alt="email" src={"/icons/iconmonstr-email-10.svg"} />
            </Alink>
          </Anchor>
          <Anchor>
            <Alink href="#">
              <img alt="email" src={"/icons/iconmonstr-whatsapp-4.svg"} />
            </Alink>
          </Anchor>
        </ContactContainer>
      </Desc>
      <Link className="link" to="/">
        Home
      </Link>
    </Wrapper>
  );
};

export default Contact;
