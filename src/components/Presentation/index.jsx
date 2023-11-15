import styled from "styled-components"
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContainerPresentation = styled.section`
    border-top: 0.4px solid #FFF2E7;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    gap: 1.5em;
    width: 100vw;
    margin-bottom: 48px;
    padding: 32px 0;

    figure{
        width: 20%;
        height: 70%;

        img{
            height: 430px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid slateblue inset;
        }
    }
`

const BoxTexts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;

    p{
        font-size: 24px;
        font-weight: bold;
    }

    h1{
        font-size: 65px;
    }
`

const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 40px;

    button{
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 0.5em 1.5em;
        background-color: slateblue;
        font-size: 18px;
        cursor: pointer;
        border: none;

        &:hover{
            background-color: ${ ({ $background }) => $background};
        }
    }

    svg{
        width: 28px;
        height: 28px;
    }
`


const Presentation = () => {
    return(
        <ContainerPresentation>
            <BoxTexts>
                <p>Olá, me chamo</p>
                <h1>Iury Gama</h1>
                <h2>Desenvolvedor Node.js</h2>
                <ContainerButtons>
                    <button $background="black" >
                        <FaGithub/>
                        GitHub
                    </button>
                    <button $background="" >
                        <FaLinkedin/>
                        Linkedin
                    </button>
                </ContainerButtons>
            </BoxTexts>
            <figure>
                <img src="https://avatars.githubusercontent.com/u/116408591?v=4" alt="" />
            </figure>
        </ContainerPresentation>
    )
}

export default Presentation;