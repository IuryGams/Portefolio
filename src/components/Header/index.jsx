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
    padding: 0.75em 0;
    background-color: transparent;
    position: relative;
    border-bottom: 0.4px solid #FFF2E7;
    text-shadow: #000 0px 0px 0px;

    @media only screen and (max-width: 768px) {
        justify-content: space-between;
        z-index: 1;
        position: ${({ $open }) => $open ? "fixed" : "relative"};;
        border-bottom: ${({ $open }) => $open ? "none" :  "0.4px solid #FFF2E7"};
        background-color: ${({ $open }) => $open ? "#005FE0" :  "transparent"};;
    }

`


const Header = () => {

    const contextMenu = useContext(MobileMenuContext);

    return (
        <ContainerHeader $open={contextMenu.open}>
            <h1>Iury Gama</h1>
            <NavBar context={contextMenu}>
                
            </NavBar>
            <MobileNavBar context={contextMenu}/>
        </ContainerHeader>
    )
}

export default Header;