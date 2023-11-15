import styled from "styled-components"

const StyledNav = styled.nav`
    display: flex;
    gap: 10px;
`

const List = styled.ul`
    display: flex;
    gap: 16px;
    color: white;
    font-size: 1.5em;
    font-weight: bold;
`

const NavBar = () => {
    return(
        <StyledNav>
            <List>
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