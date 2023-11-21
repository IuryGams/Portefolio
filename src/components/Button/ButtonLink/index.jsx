import styled from "styled-components";

const StyledButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5em;
    text-transform: capitalize;
    background-color: transparent;
    font-size: 18px;
    font-weight: bold;
    width: 200px;
    height: 50px;
    margin: 0 15px;
    border: 2px solid #e9e9e9;
    border-radius: 0.225em;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 200ms ease;

    &::before{
        content: "";
        position: absolute;
        background-color: ${({ $background }) => $background};
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        z-index: -1;
        transition: all 200ms ease;
    }

    &:active{
        transform: translateY(-3px);
    }

    svg{
        width: 28px;
        height: 28px;
    }

    @media only screen and (max-width: 768px) {
        justify-content: center;
        width: 100%;
    }   

`

const ButtonEffect = styled(StyledButton)`
    &::before{
        width: 0;
        height: 100%;
    }

    &:hover{
        border-color: ${({ $background }) => $background};
        transform: translateY(1px);
        &:before{
            width: 100%;
        }
    }
`


const ButtonLink = ({children, link, color, background}) => {
    return(
        <ButtonEffect href={link} $color={color} $background={background} target="_blank">
            {children}
        </ButtonEffect>
    )
}

export default ButtonLink;