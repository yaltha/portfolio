import styled from "styled-components";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Porflolios from "./components/Portfolios.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  /* border-sizing: border-box; */
  font-family: "Montserrat";
`;

const App = () => {
  return (
    // <Wrapper>
    // <Router>
    //   <div>
    //     <Link className="link" to="/portfolio">
    //       See my work
    //     </Link>
    //     <Link className="link" to="/about">
    //       About me
    //     </Link>
    //     <Link className="link" to="/contact">
    //       Contact
    //     </Link>
    //     <Switch>
    //       <Route path="/">
    //         <Hero />
    //       </Route>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/portfolio">
    //         <Porflolios />
    //       </Route>
    //       <Route path="/skills">
    //         <Skills />
    //       </Route>
    //       <Route path="/contact">
    //         <Contact />
    //       </Route>
    //       <Footer />
    //     </Switch>
    //   </div>
    // </Router>
    // {/* </Wrapper> */}
    <Wrapper>
      <Router>
        <div>
          {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul> */}
          {/* <Navbar /> */}

          <Switch>
            <Route exact path="/">
              <Hero />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolios">
              <Porflolios />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </Wrapper>
  );
};

export default App;
