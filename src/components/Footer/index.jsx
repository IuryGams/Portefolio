import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContainerFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    padding: 2em;
    background-color: #332686;
    gap: 1em;
`

const SocialMedia = styled.div`
    display: flex;
    gap: 1.5em;
`

const Icon = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5em;
    border-radius: 50%;
    transition: all 200ms;

    &:hover{
        background-color: white;
        color: black;

        svg{
            fill: black;
        }
    }
    
    svg{
        width: 32px;
        height: 32px;
    }
`

const Footer = () => {
    return(
        <ContainerFooter>
            <span>&copy; Todos os direitos revervados a Iury Gama.</span>
            <SocialMedia>
                <Icon title="Link para o meu Github" href="https://github.com/IuryGams" target="blank">
                    <FaGithub />
                </Icon>
                <Icon title="Link para o meu Linkedin" href="https://www.linkedin.com/in/iury-menezes-09636429b/" target="blank">
                    <FaLinkedin />
                </Icon>
            </SocialMedia>
        </ContainerFooter>
    )
}

export default Footer;