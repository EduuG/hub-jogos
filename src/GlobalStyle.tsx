import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.tsx";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background-color: ${({theme}) => theme.colors.background.primary};
        color: ${({ theme }) => theme.colors.text.primary};
        font-family: 'Inter', sans-serif;
    }
`