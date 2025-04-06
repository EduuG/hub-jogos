import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme.tsx";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background-color: ${theme.colors.background.primary};
        color: ${theme.colors.text.primary};
        font-family: 'Poppins', sans-serif;
    }
    
    // Animação de underline
    // Créditos: https://www.30secondsofcode.org/css/s/hover-underline-animation/
    //-----------------------------------------------------------------
    a {
        display: inline-block;
        position: relative;
        text-decoration: none;
        color: ${theme.colors.text.secondary};
    }

    a::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: -2px;
        left: 0;
        background-color: ${theme.palette.primary};
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    a:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    //-----------------------------------------------------------------
`
