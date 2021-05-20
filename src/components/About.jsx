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
  /* background-color: #fafafa; */
  /* padding: 2em; */
  /* border-radius: 5px; */

  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #1f4743 100%);
`;
const Title = styled.h1`
  /* text-align: center; */
  margin-bottom: 1em;
  color: white;
  font-size: 4em;
`;

const Desc = styled.p`
  max-width: 60%;
  /* margin: 0 auto; */
  color: white;
  padding: 3em 0;
`;

const About = () => {
  return (
    <Wrapper>
      <Title>About</Title>
      <Desc>
        Hello, my name is Yaltha Rullist. Welcome to my portfolio website. I am
        interested in developing and building mobile application with React
        Native.
      </Desc>
      <Link className="link" to="/">
        Home
      </Link>
    </Wrapper>
  );
};

export default About;
