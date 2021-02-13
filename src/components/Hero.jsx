import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  background-color: #191970;
  margin-bottom: 1em;
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 15%;
`;
const Title = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 4em;
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: #c4c4c4;
  padding: 1em;
`;
const Button = styled.button`
  padding: 0.5em 1em;
  margin: 1em;
  border-radius: 3px;
  border: none;
  background-color: #d72323;
  color: white;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
`;

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Yaltha Rullist</Title>
        <Text> UI/UX Designer from Payakumbuh</Text>
        <Button href="http://">See my work</Button>
      </Container>
    </Wrapper>
  );
};

export default Hero;
