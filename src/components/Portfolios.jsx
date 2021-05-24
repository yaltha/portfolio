import styled from "styled-components";
import { Link } from "react-router-dom";

import { deviceSize } from "./devices";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #1f4743 100%);

  @media only screen and (min-width: ${deviceSize.laptop}px) {
    height: 100vh;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 4em;

  @media only screen and (max-width: ${deviceSize.laptop}px) {
    font-size: 3em;
    margin-top: 1em;
  }
`;

const PortfoliosContainer = styled.div`
  margin: 2em 0;
  display: flex;

  @media only screen and (max-width: ${deviceSize.laptop}px) {
    flex-direction: column;
  }
`;

const PortfolioWrapper = styled.div`
  text-align: center;
  color: #f5fffa;

  @media only screen and (max-width: ${deviceSize.laptop}px) {
    margin-bottom: 2em;
  }
`;

const PortfolionImg = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  margin: 0 1em;
  box-shadow: 4px 0px 21px -5px rgba(0, 0, 0, 0.39);
  -webkit-box-shadow: 4px 0px 21px -5px rgba(0, 0, 0, 0.39);
  -moz-box-shadow: 4px 0px 21px -5px rgba(0, 0, 0, 0.39);

  @media only screen and (max-width: ${deviceSize.mobileS}px) {
    width: 250px;
    height: 150px;
  }
`;

const Portfolios = () => {
  return (
    <Wrapper>
      <Title>Portfolios</Title>
      <PortfoliosContainer>
        {/* <Card.Image
          src={require("/portfolios/bookStoreApp.jpg")}
          alt="portfolios"
        /> */}
        <PortfolioWrapper>
          <PortfolionImg src={"/portfolios/bookStoreApp.jpg"} />
          <h3>Book Store App</h3>
        </PortfolioWrapper>
        <PortfolioWrapper>
          <PortfolionImg src={"/portfolios/importTax.jpg"} />
          <h3>Import Tax Calculator App</h3>
        </PortfolioWrapper>
        <PortfolioWrapper>
          <PortfolionImg src={"/portfolios/rentCar.jpg"} />
          <h3>Rent Car App</h3>
        </PortfolioWrapper>
      </PortfoliosContainer>
      <Link className="link" to="/">
        Home
      </Link>
    </Wrapper>
  );
};

export default Portfolios;
