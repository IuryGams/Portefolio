import styled from "styled-components";

const options = {
    width: "30px",
    height: "4px",
    borderRadius: "2px",
    backgroundColor: "white",
    transition: "all 400ms ease-in-out"
}

const ContainerBurguer = styled.label`
    display: block;
    border: 1px solid #e9e9e9;
    padding: 1em;
    border-radius: 4px;
`

const Burguer = styled.div`
    width: ${ options.width };
    height: ${ options.height };
    background-color: ${ options.backgroundColor };
    border-radius: ${ options.borderRadius };
    transition: ${ options.transition };
    position: relative;
    

    &::before, &::after{
        content: "";
        position: absolute;
        width: ${ options.width };
        height: ${ options.height };
        background-color: ${ options.backgroundColor };
        border-radius: ${ options.borderRadius };
        transition: ${ options.transition };
    }

    &::before{
        margin-top: -10px;
        transform: rotate(405deg);
    }

    &::after{
        margin-top: 10px;
        transform: rotate(-405deg);
    }
`


const MobileNavBar = () => {

    return(
        <ContainerBurguer htmlFor="menu" >
            <Burguer />
        </ContainerBurguer>  
    )
}

export default MobileNavBar;