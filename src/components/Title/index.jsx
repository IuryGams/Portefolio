import styled from "styled-components";

const StyledTitle = styled.h1`
    font-size: 3em;
    margin: 0.5em 0;
    text-transform: capitalize;
    text-align: center;

    @media only screen and (max-width: 768px) {
        margin-top: 0.5em;
    }
`

const Title = ({children}) =>{
    return(
        <StyledTitle>
            {children}
        </StyledTitle>
    )
}

export default Title;