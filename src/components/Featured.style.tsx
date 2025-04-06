import styled from "styled-components";
import { GameTitle, StyledGameCard } from "./GameCard.style.tsx";
import { theme } from "../Theme.tsx";

export const GameInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 600px;
    min-height: 350px;
    background-color: ${theme.colors.background.primary}77;
    backdrop-filter: blur(8px);
    box-shadow: ${theme.shadows.primary};
    padding: 50px;
    border-radius: ${theme.border.radius};
    
    & h4 {
        display: flex;
        align-items: center;
        color: #CCC;
        gap: 5px;
    }

    @media (max-width: 768px) {
        width: 90%;
        padding: 20px;
    }

    @media (min-width: 769px) and (max-width: 1366px) {
        width: 80%;
        padding: 30px;
    }
`;

export const FeaturedWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 1500px;

    @media (max-width: 1366px) {
        width: 100%;
    }

    @media (max-width: 768px) {
        justify-content: center;
    }

    @media (min-width: 769px) and (max-width: 1366px) {
        justify-content: center;
    }
`;

export const FeaturedGameList = styled.ul<{ isMobile: boolean }>`
    display: flex;
    flex-direction: ${({ isMobile }) => isMobile ? "row" : "column"};
    overflow-x: ${({ isMobile }) => isMobile ? "scroll" : ""};
    scrollbar-width: none;
    -ms-overflow-style: none;
    gap: 30px;

    &::-webkit-scrollbar {
        display: none;
    }
    
    & > li:first-child {
        margin-left: ${({ isMobile }) => isMobile ? "20px" : "0"};
    }

    @media (min-width: 769px) and (max-width: 1366px) {
        flex-direction: row;
        overflow-x: auto;
    }
    
    @media (max-width: 1366px) or (max-height: 900px) {
        margin-top: 140px;
    }
    
    @media (max-width: 768px) {
        margin-top: 0px;
    }
`;

export const StyledFeatured = styled.div<{ background: string, isMobile: boolean }>`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding-inline: ${({ isMobile }) => !isMobile ? "120px" : "0"};
    margin-top: ${({ isMobile }) => isMobile ? "20px" : "0"};
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        opacity: 0.6;
        background-image: ${({ background }) => `url(${background})`};
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        transition-property: background-image;
        transition-duration: 350ms;
        transition-timing-function: ease;
        z-index: -1;
        mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 90%);
        mask-composite: intersect;
        -webkit-mask-composite: destination-in;
    }

    &::after {
        content: "";
        position: absolute;
        backdrop-filter: blur(3px);
        inset: 0;
        z-index: 1;
    }

    ${FeaturedWrapper} {
        z-index: 2;
    }

    ${StyledGameCard} {
        width: 460px;
        height: 215px;
        position: relative;

        &:hover, &.active {
            transform: translateX(40px);
        }

        ${GameTitle} {
            font-size: 1.4rem;
        }

        @media (max-width: 1366px) {
            width: 35%;
            min-width: 35%;
            height: 200px;
            margin-bottom: 15px;
            transform: none !important;

            ${GameTitle} {
                font-size: 1.2rem;
            }
        }
    }
    

    @media (min-width: 769px) and (max-width: 1366px) {
        flex-direction: column;
        justify-content: center;
        padding-inline: 30px;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`;
