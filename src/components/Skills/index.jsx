import styled from "styled-components";
import CardSkill from "./CardSkill";
import { ListaSkills } from "assets/ListaSkills";
import Title from "components/Title";
import Section from "components/ContainerSection";

const Description = styled.span`
    text-align: center;
    font-size: 1.2em;
    max-width: 50%;
    margin: 0 auto;
    line-height: 1.6;
    margin-bottom: 2em;

    @media only screen and (max-width: 768px) {
        max-width: 100%;
        padding: 0 1em;
    }
`

const Content = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: row wrap;
    gap: 1em;
    padding: 1em;
    width: 70%;
    min-height: 90%;
    max-height: 90%;
    overflow: auto;

    @media only screen and (max-width: 768px) {
        padding: 0 1em;
        padding-bottom: 2em;
        width: 100%;
        gap: 0.5em;
        max-height: 870px;
        overflow-y: auto;
    }
`

const Skills = () => {
    return(
        <Section>
            <Title>Minhas Habilidades</Title>
            <Description>Aqui você encontrará todas as tecnologias que venho estudando ao longo dos anos e meu tempo de experiência com elas.</Description>
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