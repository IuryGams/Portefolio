import styled from "styled-components"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ButtonLink from "components/Button/ButtonLink";
import developer from "./developer.svg";

const ContainerPresentation = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 1.5em;
    width: 100vw;
    min-height: 94vh;
    padding: 32px 0;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        gap: 0;
    }
`  

const BoxTexts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 18px;
    width: 50%;
    height: 100%;

    p{  
        text-align: center;
        font-size: 1.5em;
        font-weight: bold;
        max-width: 50%;
        line-height: 1.5;
        order: 1;
    }
    h1{
        font-size: 4em;
        order: 2;
    }
    h2{
        order: 3;
    }

    @media only screen and (max-width: 768px) {
        justify-content: flex-start;
        padding-top: 32px;
        width: 100%;
        height: 60%;
        order: 2;

        p, h1, h2{
            text-align: center;
        }

        p{
            max-width: 80%;
        }
        h1{
            font-size: 3.2em;
            
        }
    }

    @media only screen and (max-width: 320px) {
        h1{
            font-size: 3em;
        }
    }
`

const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 40px;
    order: 4;
    padding: 0 2em;
    /* z-index: -1; */


    @media only screen and (max-width: 768px) {
        gap: 16px;
        flex-direction: column;
    }
`

const ContainerImage = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;

    img{
        width: 80%;
        object-fit: cover;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
        height: 40%;
        order: 1;

        img{
            width: 75%;
            height: 70%;
        }
    }
`

const Emoji = styled.span`
    display: inline;
    transform: rotate(45deg);
`


const Presentation = () => {
    return(
        <ContainerPresentation>
            <BoxTexts>
                <h1>Iury Gama</h1>
                <h2>Desenvolvedor Web</h2>
                <p>Olá mundo<Emoji>👋🏻</Emoji>, seja muito bem-vindo&#40;a&#41; ao meu portifólio!</p>
                <ContainerButtons>
                    <ButtonLink link="https://github.com/IuryGams" background="black">
                        <FaGithub/>
                        GitHub
                    </ButtonLink>
                    <ButtonLink link="https://linkedin.com/in/iury-menezes-09636429b" background="#1577da"> 
                        <FaLinkedin/>
                        Linkedin
                    </ButtonLink>
                </ContainerButtons>
            </BoxTexts>
            <ContainerImage>
                <img src={developer} alt="Uma pessoa desenvolvendo códigos."/>
            </ContainerImage>
        </ContainerPresentation>
    )
}

export default Presentation;