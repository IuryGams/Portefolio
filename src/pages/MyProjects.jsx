import SubTitle from "components/SubTitle"
import Title from "components/Title"
import styled from "styled-components"
import { Repositorios } from "assets/Repositorios";
import Project from "components/Project";

const MainGaleria = styled.main`
    padding: 1em 0;
    min-height: 100dvh;
`

const SectionGaleriaProjects = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(auto-fill, 1fr);
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    gap: 1em;
`


export default function MyProjects (){
    return(
        <MainGaleria>
            <Title>Meus Projetos</Title>
            <SubTitle>Esta é a galeria de meus projetos.</SubTitle>
            <SectionGaleriaProjects>
                {Repositorios.map(repositorio => {
                    return(
                        <Project repositorio={repositorio} key={repositorio.name} />
                    )
                })}
            </SectionGaleriaProjects>
        </MainGaleria>
    )
}