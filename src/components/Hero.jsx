import styled from "styled-components";

import { Link } from "react-router-dom";

const Wrapper = styled.section`
  height: 100vh;
  /* background-color: #191970; */
  /* background-color: #142850; */
  /* margin-bottom: 1em; */
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #1f4743 100%);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20vh;
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
  /* padding: 1em; */
  line-height: 1em;
`;
const Button = styled.div`
  padding: 0.5em 1em;
  margin: 1em;
  border-radius: 3px;
  border: none;
  background-color: #d72323;
  color: white;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
  text-transform: none;
`;

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

const LinkContainer = styled.div`
  margin: 2em 0;
  display: flex;
  flex-direction: row;
`;

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <ProfilePicture src={"/profilePicture/pp-yaltha.jpg"} />
        <Title>Yaltha Rullist</Title>
        <Text> React Native Developer</Text>
        <LinkContainer>
          <Link className="link" to="/portfolios">
            See my work
          </Link>
          <Link className="link" to="/about">
            About me
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </LinkContainer>
      </Container>
    </Wrapper>
  );
};

export default Hero;
