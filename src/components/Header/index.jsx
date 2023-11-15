import NavBar from "components/NavBar";
import MobileNavBar from "components/NavBar/MobileNavBar";
import { MobileMenuContext } from "context/mobileMenu";
import { useContext } from "react";
import styled from "styled-components";

const ContainerHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 8vh;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 1em;
    background-color: transparent;
`

const Title = styled.h1`
    color: white;
`

const Header = () => {

    const contextMenu = useContext(MobileMenuContext);
    
    return (
        <ContainerHeader>
            <Title>Iury Gama</Title>
            <NavBar>
                
            </NavBar>
            <MobileNavBar context={contextMenu}/>
        </ContainerHeader>
    )
}

export default Header;