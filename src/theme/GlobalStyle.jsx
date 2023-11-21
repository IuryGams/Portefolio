import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        text-decoration: none;
        list-style: none;
        color: white;
        &::selection{
            background-color: black;
        }
    }

    html{
        scroll-behavior: smooth;
    }
    body{
        width: 100%;
        min-height: 100vh;
        height: 100%;
        background-image: linear-gradient(to bottom, #1958b7, #3053c0, #494bc6, #6141ca, #7a30cb); 
        &::-webkit-scrollbar{
            display: none;
        }
    }
`

export default GlobalStyle;