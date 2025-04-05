import styled from "styled-components";
import {GameTitle, StyledGameCard} from "./GameCard.style.tsx";

export const GameInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
`

export const FeaturedWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 1500px;
`

export const FeaturedGameList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
export const StyledFeatured = styled.div<{background: string}>`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding-inline: 60px;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        opacity: 0.6;
        background-image: ${({background}) => `url(${background})`};
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        transition-property: background-image;
        transition-duration: 350ms;
        transition-timing-function: ease;
        z-index: -1;
        mask-image:
                linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 90%);
        mask-composite: intersect;
        -webkit-mask-composite: destination-in;
    }
    
    &::after {
        content: "";
        position: absolute;
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
    }
`