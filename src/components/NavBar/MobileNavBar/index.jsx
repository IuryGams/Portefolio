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
    cursor: pointer;
`

const Burguer = styled.div`
    width: ${ options.width };
    height: ${ options.height };
    background-color: ${({ $open }) => $open ? "rgba(0, 0, 0, 0)" : options.backgroundColor };
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
        margin-top: ${({ $open }) => $open ? "0" : "-10px"};
        transform: ${({ $open }) => $open ? "rotate(405deg)" : "rotate(0deg)"};
    }



    &::after{
        margin-top: ${({ $open }) => $open ? "0" : "10px"};
        transform: ${({ $open }) => $open ? "rotate(-405deg)" : "rotate(0deg)"};;
    }
`


const MobileNavBar = ({context}) => {

    return(
        <ContainerBurguer onClick={() => context.toggleMenu() } htmlFor="menu" >
            <Burguer  $open={context.open} />
        </ContainerBurguer>  
    )
}

export default MobileNavBar;