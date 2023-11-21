import Presentation from "components/Presentation";
import Skills from "components/Skills";
import styled from "styled-components";
import AboutMe from "components/AboutMe";
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

export default function Home () {
    return(
        <StyledMain>
          <Presentation />
          <Skills />
          <AboutMe />
          <Contact />
        </StyledMain>
    )
}