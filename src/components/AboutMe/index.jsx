import styled from "styled-components";
import Title from "components/Title";
import Section from "components/ContainerSection";
import SubTitle from "components/SubTitle";
import { Link } from "react-router-dom";

const Content = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 1em;
    width: 100%;
    height: 60vh;
    margin: 1em 0;
    padding: 1em;
    background-color: rgba(0,0,0,0.1);

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        height: fit-content;
    }
`

const ContentText = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    height: 100%;
    padding: 1em;
    text-align: left;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        left: 100%;
        height: 80%;
        width: 3px;
        border-radius: 4px;
        background-color: white;
    }

    p {
        margin: 0.75em 0;
        font-size: 21px;
        line-height: 1.3;
        a {  
            text-align: center;
            text-decoration: underline;
            color: #eeff8d;
        }
    }

    i {
        text-align: right;
        font-size: 18px;
        span{
            font-style: normal;
        }
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
        justify-content: start;
        align-items: center;
        order: 2;

        &::after{
            content: "";
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            height: 3px;
            width: 25%;
            border-radius: 4px;
            background-color: #19beff;
        }

        p{
            font-size: 18px;
        }
    }
`

const StyledAside = styled.aside`
    width: 40%;

    figure{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;

        img{
            width: 60%;
            border: 2px solid white;
            /* height: 100%; */
            object-fit: cover;
            border-radius: 50%;
        }
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
        order: 1;
    }
`



const AboutMe = () => {
    return(
        <Section>
            <Title>Sobre mim</Title>
            <SubTitle>Aqui você encontrará mais informações sobre mim, o que faço e minhas habilidades atuais principalmente em termos de programação e tecnologia.</SubTitle>
            <Content>
                <ContentText>
                    <h2>Olá Mundo! 👋🏻</h2>
                    <p>Eu me chamo <strong>Iury Gama</strong>, sou um homem de pele clara, utilizo óculos de grau, tenho cabelos e olhos castanhos.</p>
                    <p>Sou um estudante e um entusiasta na área da programação. Tenho interesse em aprender <strong>Front-end</strong> e <strong>Back-end.</strong> Pois, tenho a ambição de me tornar um desenvolvedor Web <strong>FullStack.</strong> </p>
                    <p>Com o propósito de alcançar o meu sonho, dedico muitas horas estudando e praticando. Também gosto de compartilhar conteúdo relacionado ao meu aprendizado durante o meu tempo de estudo. Sinta-se à vontade para me seguir no <a href="https://www.linkedin.com/in/iury-menezes-09636429b/" target="blank">Linkedin</a> ou no <a href=" https://github.com/IuryGams" target="blank">GitHub</a>, onde posto conteúdos úteis sobre desensolvimento e programação web. Confira o meu aprendizando na aba <Link to="/myProjects">Meus Projetos</Link>.</p>
                    <p>
                        Estou aberto a oportunidades de trabalho onde eu posso contribuir, aprender e crescer. Abaixo você encontrará uma seção para me contatar.
                    </p>
                    <i>Aguardo ansiosamente pelo seu contato! <span>😉</span></i>
                </ContentText>
                <StyledAside>
                    <figure>
                        <img src="https://github.com/IuryGams.png" alt="Foto de Iury Gama. Um homem de pele clara, utilizando óculos de grau, olhos e cabelos castanhos." />
                    </figure>
                </StyledAside>
            </Content>
        </Section>
    )
}

export default AboutMe;