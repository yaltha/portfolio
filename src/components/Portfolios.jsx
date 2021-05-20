import styled from "styled-components";
import { Link } from "react-router-dom";

import { Card } from "./Card";

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

const PortfoliosContainer = styled.div`
  margin: 2em 0;
  display: flex;
  /* justify-content: space-around; */
  /* align-items:; */
`;

const PortfolioWrapper = styled.div`
  text-align: center;
  color: #f5fffa;
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
