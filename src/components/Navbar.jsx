import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow: auto;
  z-index: 1;
  text-decoration: none;
  // background-color: papayawhip;
  // background-color: #1E3C72;
  background-color: #a9a9a9;
  // padding: 40px 0;
`;

const Left = styled.div`
  // background-color: gray;
  padding-left: 40px;
`;

const Right = styled.div`
  padding-right: 40px;
`;

// const Link = styled.a`
//   text-decoration: none;
//   color: #fff;
//   margin: 0 30px;
//   font-size: 1em;
//   font-weight: bold;
// `;
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

const Navbar = () => {
  return (
    <>
      {/* <h3>Navbar</h3>    */}
      <Nav>
        <Left>
          {/* <Link href="http://">Yaltha Rullist</Link> */}
          <Link to="/">Yaltha Rullists</Link>
        </Left>
        <Right>
          {/* <Link href="http://">Home</Link>
          <Link href="http://">About</Link>
          <Link href="http://">Contact</Link>
          <Button href="http://">Portfolios</Button> */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/portfolios">Portfolios</Link>
        </Right>
      </Nav>
    </>
  );
};

export default Navbar;
