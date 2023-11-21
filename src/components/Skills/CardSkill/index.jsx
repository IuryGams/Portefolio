import styled from "styled-components";
import { LiaHandPointerSolid } from "react-icons/lia";

const ContainerCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    font-size: 18px;
    cursor: pointer;
    overflow: hidden;
    text-shadow: #000 1px 2px 3px; border: #000 1px solid;
    width: 260px;
    height: 180px;
    position: relative;
    transition: all 500ms;
    background-color: ${( { $background }) => $background} ;
    border-radius: 0.5em;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    svg{
        width: 48px;
        height: 48px;
    }
    h2{
        font-size: 24px;
    }

    p{
        text-align: center;
    }

    @media only screen and (max-width: 1240px) {
        width: 220px;
        gap: 6px;

        h2{
            font-size: 20px;
            text-align: center;
        }
        p{
            text-align: center;
            
        }
    }


    @media only screen and (max-width: 768px) {
        width: 175px;
        gap: 6px;

        h2{
            font-size: 20px;
            text-align: center;
        }
        p{
            text-align: center;
            
        }
    }

    @media only screen and (max-width: 390px) {
        width: 160px;
    }
`

const BoxSkill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    i{
        svg{
            
        }
    }
`

const IconSkill = styled.i`
    svg{
        fill: ${( { $cor }) => $cor};
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    display: none;
    max-width: 100%;
    width: 100%;
    overflow: hidden;
    padding: 0px;
    height: 0;
    text-align: center;
    transition: all 200ms;
    -webkit-text-stroke-width: 0.1px;
    -webkit-text-stroke-color: #000;

    h2{
        font-size: 22px;;
        padding: 0.1em 0;
        width: 100%;
    }
`

const TextContent = styled.div`
    max-width: 100%;
    /* overflow-y: auto; */

    p{  
        font-size: 16px;
        
    }
` 

const Icon = styled.i`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 5px;
    /* background-color: ${({ $cor }) => $cor}; */
    background-color: rgba(0,0,0,0.1);
    
    svg{
       width: 24px;
       height: 24px;
    }
`

const CardEffect = styled(ContainerCard)`
    &:hover{
        height: 240px;
    }

    &:hover ${BoxSkill}{
        height: 0;
        opacity: 0;
        display: none;
    }

    &:hover ${Content} {
        display: flex;
        justify-content: center;
        font-size: 15px;
        height: 500px;
        opacity: 1;
        padding: 0px 5px;
    }

    @media only screen and (max-width: 768px) {
        height: 180px;
        /* width: 260px; */

        &:hover{
            height: 300px;
        }

        &:hover ${TextContent} {
            overflow-y: auto;

            p{
                word-break: break-word;
            }
        }
    }
`



const CardSkill = ({ icon, title, bgColor, time, cor, description }) => {

    return(
        <CardEffect $background={bgColor} >
            <BoxSkill>
                <IconSkill $cor={cor}>{icon}</IconSkill>
                <h2>{title}</h2>
                <p>{time}</p>
            </BoxSkill>
            <Content>
                <h2>{title}</h2>
                <TextContent>
                    <p>{description}</p>
                </TextContent>
            </Content>
            <Icon >
                <LiaHandPointerSolid />
            </Icon>
        </CardEffect>
    )
}

export default CardSkill;