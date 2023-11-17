import styled from "styled-components";

const StyledTitle = styled.h1`
    font-size: 2.5em;
    margin-bottom: 1em;
    text-transform: capitalize;

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