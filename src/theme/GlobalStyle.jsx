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
        background-color: #E9e9e9;
    }
`

export default GlobalStyle;