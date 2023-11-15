import styled from "styled-components"

const StyledNav = styled.nav`
    display: flex;
    transition: all 400 ease-in-out;

    @media only screen and (max-width: 768px) {
        display: ${({ $open }) => $open ? "flex" : "none"};
        width: 60vw;
        overflow: hidden;
        position: absolute;
        transition: all 400 ease-in-out;
        right: 0;
        top: 100%;
        background-color: slategrey;
    }
`

const List = styled.ul`
    display: flex;
    gap: 32px;
    color: white;
    font-size: 1.5em;
    font-weight: bold;
    transition: all 400 ease-in-out;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 92vh;
    }

    li{
        cursor: pointer;
        border-bottom: 3px solid transparent;
        &:hover{
            border-bottom: 3px solid white;
        }
    }
`

const NavBar = ({ context }) => {
    return(
        <StyledNav $open={context.open} >
            <List $open={context.open} >
                <li>
                    <span>Inicio</span>
                </li>
                <li>
                    <span>Sobre mim</span>
                </li>
                <li>
                    <span>Meus Projetos</span>
                </li>
                <li>
                    <span>Contato</span>
                </li>
            </List>
        </StyledNav>
    )
}

export default NavBar;