import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* width: 80%; */
  /* margin: 4em auto; */
  /* background-color: #f5fffa; */
  /* padding: 2em; */
  /* border-radius: 5px; */

  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #1f4743 100%);
`;

  const Title = styled.h1`
    color: white;
    font-size: 4em;
  `;

const Desc = styled.p`
  color: white;
  font-size: 1em;
  padding: 3em 0;
`;

const Contact = () => {
  return (
    <Wrapper>
      <Title>Contact</Title>
      <Desc>
        Any ideas or project or collaboration in mind? Please reach me at:
      </Desc>
      <Link className="link" to="/">
        Home
      </Link>
    </Wrapper>
  );
};

export default Contact;
