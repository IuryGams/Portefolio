import Skills from "components/Skills";
import Header from "components/Header";
import Presentation from "components/Presentation";
import MobileProvider from "context/mobileMenu";
import styled from "styled-components";
import AboutMe from "components/AboutMe";
import Footer from "components/Footer";
import Contact from "components/Contact";

const StyledMain = styled.main`
  display: block;

  @media screen and (max-width: 768px) {

    width: 100%;
  }

  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {
  return (
    <MobileProvider>
      <div className="App">
        <Header />
        <StyledMain>
          <Presentation />
          <AboutMe />
          <Skills />
          <Contact />
        </StyledMain>
        <Footer />
      </div>
    </MobileProvider>
  );
}

export default App;
