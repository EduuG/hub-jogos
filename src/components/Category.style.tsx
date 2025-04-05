import styled from "styled-components";
import { StyledGameCard } from "./GameCard.style.tsx";
import {theme} from "../Theme.tsx";

export const StyledCategory = styled.section<{ background: string }>`
    position: relative;
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding-block: 20px;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: ${({ background }) => `url(${background})`};
        background-size: cover;
        background-position: center;
        mask-image:
                linear-gradient(to bottom, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 85%);
        z-index: 0;
    }

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        backdrop-filter: blur(3px);
        background-color: ${theme.colors.background.primary};
        opacity: 0.8;
        z-index: 1;
    }

    & > * {
        position: relative;
        z-index: 2;
    }

    ${StyledGameCard} {
        height: 300px;
    }
`;

export const CategoryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 50px;

    & a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        color: ${theme.colors.text.secondary};
        text-decoration: none;
        font-weight: bold;
        transition: color 360ms ease;
        
        &:hover {
            color: ${theme.colors.text.primary};
        }
    }
`