import styled from "styled-components"

const StyledSpan = styled.span`
    text-align: center;
    font-size: 1.2rem;
    max-width: 50%;
    margin: 0 auto;
    line-height: 1.6;
    margin-bottom: 2em;
    display: block;

    @media only screen and (max-width: 768px) {
        max-width: 100%;
        padding: 0 1em;
    }
`

export default function SubTitle ({children}) {
    return(
        <StyledSpan>{children}</StyledSpan>
    )
}