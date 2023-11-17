import styled from "styled-components";

const StyledSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: 90vh;
    flex-direction: column;
    position: relative;

    &::before{
        content: "";
        position: absolute;
        top: -2%;
        left: 50%;
        transform: translateX(-50%);
        background-color: white;
        width: 65%;
        height: 3px;
        border-radius: 4px;
    }

    @media only screen and (max-width: 768px) {
        min-height: 100vh;


        &::before{
            content: "";
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            background-color: white;
            width: 75%;
            height: 3px;
            border-radius: 4px;
        }
    }
`


const Section = ({children}) => {
    return(
        <StyledSection>
            {children}
        </StyledSection>
    )
}

export default Section;