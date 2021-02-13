import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  margin: 1em auto;
  background-color: #f5fffa;
  padding: 2em;
  border-radius: 5px;
  // box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 2px 5px rgba(0, 0, 0, 0.26);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;
const Title = styled.h3`
  text-align: center;
  margin-bottom: 1em;
`;

const Desc = styled.p`
  max-width: 80%;
  margin: 0 auto;
`;

const About = () => {
  return (
    <Wrapper>
      <Title>About</Title>
      <Desc>
        Hello, my name is Yaltha Rullist. Welcome to my portfolio website. In
        summary about me, I have an interest in UI/UX design. I constantly and
        continuously improving to be a better designer. Chhers!!!
      </Desc>
    </Wrapper>
  );
};

export default About;
