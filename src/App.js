import styled from 'styled-components'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Porflolios from './components/Portfolios.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  border-sizing: border-box;
  font-family: 'Montserrat';
`

const App = () => {
  return (
    <Wrapper>
      <Navbar/>
      <Hero/>
      <About/>
      <Porflolios/>
      <Skills/>
      <Contact/>
      <Footer/>
    </Wrapper>
  );
}

export default App;
