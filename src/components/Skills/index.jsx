import styled from "styled-components";
import CardSkill from "./CardSkill";
import { ListaSkills } from "assets/ListaSkills";
import Title from "components/Title";
import Section from "components/ContainerSection";
import SubTitle from "components/SubTitle";

// const Description = styled.span`
//     text-align: center;
//     font-size: 1.2em;
//     max-width: 50%;
//     margin: 0 auto;
//     line-height: 1.6;
//     margin-bottom: 2em;

//     @media only screen and (max-width: 768px) {
//         max-width: 100%;
//         padding: 0 1em;
//     }
// `

const Content = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: 2em;

    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        padding: 0 1em;
        padding-bottom: 2em;
        width: 100%;
        gap: 1em;
        max-height: 870px;
        overflow-y: auto;
    }
`

const Skills = () => {
    return(
        <Section>
            <Title>Minhas Habilidades</Title>
            <SubTitle>Aqui você encontrará todas as tecnologias que venho estudando ao longo dos anos e meu tempo de experiência com elas.</SubTitle>
            <Content>
                { ListaSkills.map( skill => {
                    return(
                        <li>
                            <CardSkill cor={skill.cor} bgColor={skill.bgCor} icon={skill.icon} time={skill.tempo} title={skill.text} description={skill.description} />
                        </li>
                        )
                    })}
            </Content>
        </Section>
    )
}

export default Skills;