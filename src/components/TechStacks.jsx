import styled from "styled-components";
import { Link } from "react-router-dom";
import { deviceSize } from "./devices";

const stacksData = [
    {
    stacks:'HTML',
    level: 4
    },
    {
    stacks:'CSS/SCSS',
    level: 4
    },
    {
    stacks:'JavaScript',
    level: 3
    },
    {
    stacks:'ReactJs',
    level: 3
    },
    {
    stacks:'React Native',
    level: 3
    },
]

const Wrapper = styled.section`
  height: 100vh;
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
  @media only screen and (max-width: ${deviceSize.tablet}px) {
    font-size: 3em;
  }
  @media only screen and (max-width: ${deviceSize.mobileS}px) {
    font-size: 2em;
  }
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: #c4c4c4;
  /* padding: 1em; */
  line-height: 1em;

  @media only screen and (max-width: ${deviceSize.tablet}px) {
    font-size: 20px;
  }
`;

const TechStacks = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Tech Stacks</Title>
        <Text> How familiar am I with these stacks?:</Text>
        {stacksData && stacksData.map{
            data => (
                <div>
                    <p>{data.stacks}</p>
                    <p>{data.rate}</p>
                </div>
            )
        }}
        <div>
          <p>HTML</p>
        </div>
        <div>
          <p>CSS/SCSS</p>
        </div>
        <div>
          <p>JavaScript</p>
        </div>
        <Link className="link" to="/">
          Home
        </Link>
      </Container>
    </Wrapper>
  );
};

export default TechStacks;
