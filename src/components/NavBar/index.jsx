import styled from "styled-components"
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
    display: flex;
    transition: all 400 ease-in-out;
    z-index: 1;

    @media only screen and (max-width: 768px) {
        display: ${({ $open }) => $open ? "flex" : "none"};
        width: 100vw;
        height: 96vh;
        overflow: hidden;
        position: fixed;
        transition: all 400 ease-in-out;
        right: 0;
        top: 6%;
        background-image: linear-gradient(to bottom, #005fe0, #1e5aea, #3652f3, #4e49fa, #653bff);
    }
`

const List = styled.ul`
    display: flex;
    gap: 32px;
    color: white;
    font-size: 1.5em;
    font-weight: bold;
    transition: all 400 ease-in-out;
    z-index: 1000;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 100%;
    }

    li{
        cursor: pointer;
        border-bottom: 3px solid transparent;

        &:hover{
            border-bottom: 3px solid white;
        }

        span{
            text-shadow: #000 0px 0px 0px;
        }
    }
`

const NavBar = ({ context }) => {
    return(
        <StyledNav $open={context.open} >
            <List $open={context.open} >
                <li>
                    <Link to="/" >Inicio</Link>
                </li>
                <li>
                    <Link to="/myProjects" >Meus Projetos</Link>  
                </li>
            </List>
        </StyledNav>
    )
}

export default NavBar;