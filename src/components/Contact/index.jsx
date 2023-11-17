import Section from "components/ContainerSection";
import Title from "components/Title";
import styled from "styled-components";
import email from "./emailMessage.svg";
import Button from "components/Button";

const Description = styled.span`
    text-align: center;
    font-size: 1.2em;
    max-width: 50%;
    margin: 0 auto;
    margin-bottom: 1em;

    @media only screen and (max-width: 768px) {
        max-width: 100%;
        padding: 0 1em;
    }
`

const ContainerForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50vh;
    /* background-color: rgba(0, 0, 0, 0.1); */

    @media only screen and (max-width: 768px) {
        /* width: 80%; */
        height: 60vh;
    }

`

const StyledForm = styled.form`
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 1em;
    width: 70%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 2em;

    @media only screen and (max-width: 768px) {
        width: 80%;
    }
`

const Image = styled.figure`
    width: 100%;
    height: 100%;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media only screen and (max-width: 768px) {
        display: none;
    }
`

const StyledFieldSet = styled.fieldset`
    display: flex;
    flex-flow: row wrap;
    gap: 1.5em;
    width: 100%;
    height: 100%;
    max-height: 100%;
    padding: 1em 0;
    font-size: 20px;
    /* padding: 1em 0.5em; */
    border: none;
    /* overflow: hidden; */

    @media only screen and (max-width: 768px) {
        flex-flow: column nowrap;
        gap: 1.2em;
    }
`


const BoxInput = styled.div`
    position: relative;
    width: 47%;
    height: 15%;
    border-radius: 0.25em;

    @media only screen and (max-width: 768px) {
        width: 100%;
        height: 12%;
    }

    input{
        width: 100%;
        align-items: center;
        height: 100%;
        padding: 1em;
        padding-left: 10px;
        background-color: transparent;
        font-size: 1em;
        border: none;
        outline: none;
        border-bottom: 3px solid white; 

        &:focus + label, &:valid + label {
            top: -30%;
            left: 1%;
            font-size: 0.8em;
            font-weight: bold;
            color: whitesmoke;
            text-shadow: #000 1px 1px 1px;
        }
    }

    label{
        position: absolute;
        top: 50%;
        left: 5%;
        font-size: 1em;
        background-color: transparent;
        transform: translateY(-50%);
        transition: all 300ms ease-out;
    }


`

const ContainerTextArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 60%;
    position: relative;

    textarea {
        width: 100%;
        height: 90%;
        outline: none;
        border: none;
        border-bottom: 3px solid white;
        background-color: transparent;
        font-size: 20px;

        &:focus + label, &:valid + label{
            top: -6%;
            left: 0;
            font-size: 0.8em;
            font-weight: bold;
            color: whitesmoke;
            text-shadow: #000 1px 1px 1px;
        }
    }

    label{
        position: absolute;
        top: 10%;
        left: 2%;
        font-size: 1em;
        background-color: transparent;
        transform: translateY(-50%);
        transition: all 300ms ease-out;
    }

    @media only screen and (max-width: 768px) {
        height: 50%;

        textarea {
            height: 80%;
        }
    }
`

const Contact = () =>{
    return(
        <Section>
            <Title>Contate-me</Title>
            <Description>Aqui você pode entrar em contato comigo.</Description>
            <ContainerForm>
                <StyledForm>
                    <Image>
                        <img src={email} alt="" />
                    </Image>
                
                    <StyledFieldSet>
                        <BoxInput>
                            <input id="name" type="text" required />
                            <label htmlFor="name">Nome</label>
                        </BoxInput>
                            
                        <BoxInput>
                            <input id="email" type="email" required />
                            <label htmlFor="email" >E-mail</label>
                        </BoxInput>

                        <ContainerTextArea>
                            <textarea id="message" type="text" required />
                            <label htmlFor="message" >Escreva sua mensagem...</label>
                        </ContainerTextArea>

                        <Button type="submit" background="#4D00DB" >
                            Enviar
                        </Button>

                    </StyledFieldSet>

                </StyledForm>
            </ContainerForm>
        </Section>
    )
}

export default Contact;