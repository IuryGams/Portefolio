import { IoLogoVercel } from "react-icons/io5";
import { RiGitRepositoryFill } from "react-icons/ri";
import ButtonLink from "components/Button/ButtonLink";
import styled from "styled-components";

const ContainerProject = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    padding: 1em;
    border-radius: 1em;
    background-color: rgba(0,0,0,0.5);
`

const Image = styled.figure`

    width: 100%;
    height: 100%;

    img{
        object-fit: cover;
        border-radius: 8px;
        width: 100%;
        height: 100%;
    }
`

const ContainerButtons = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
`

const Description = styled.span`
    text-align: center;
    font-size: 1.2rem;
    max-width: 90%;
    margin: 0 auto;
    line-height: 1.6;
    display: block;

    @media only screen and (max-width: 768px) {
        max-width: 100%;
        padding: 0 1em;
    }
`

export default function Project ({ repositorio }) {
    return(

        <ContainerProject>
            <Image>
                <img src={repositorio.image} alt={repositorio.name} />
            </Image>
            <Description>{repositorio.description}</Description>
            <ContainerButtons>
                <ButtonLink link={repositorio.url} background="#5627ff"><IoLogoVercel /> Deploy</ButtonLink>
                <ButtonLink link={repositorio.git} background="#000" ><RiGitRepositoryFill /> Repositório</ButtonLink>
            </ContainerButtons>
        </ContainerProject>
    )
}