import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        text-decoration: none;
        list-style: none;
    }

    body{
        width: 100%;
        min-height: 100vh;
        height: 100%;
        background-image: linear-gradient(to bottom, #051937, #002668, #172f98, #4e2ec5, #8c12eb);
    }
`

export default GlobalStyle;