import NavBar from "components/NavBar";
import MobileNavBar from "components/NavBar/MobileNavBar";
import { MobileMenuContext } from "context/mobileMenu";
import { useContext } from "react";
import styled from "styled-components";

const ContainerHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    min-width: 250px;
    padding: 1em;
    background-color: transparent;
    position: relative;
`

const Title = styled.h1`
    color: white;
`

const Header = () => {

    const contextMenu = useContext(MobileMenuContext);

    return (
        <ContainerHeader>
            <Title>Iury Gama</Title>
            <NavBar context={contextMenu}>
                
            </NavBar>
            <MobileNavBar context={contextMenu}/>
        </ContainerHeader>
    )
}

export default Header;