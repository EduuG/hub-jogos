import styled from "styled-components";
import {StyledGameCard} from "./GameCard.style.tsx";

export const Featured = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url("/images/background.png");
    height: 100vh;
    justify-content: center;
    padding-inline: 60px;

    ${StyledGameCard} {
        width: 350px;
        height: 160px;
    }
    
    & div {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
`

export const StyledCategory = styled.section`
    display: flex;
    flex-direction: column;
    height: fit-content;
    background-color: ${({theme}) => theme.colors.background.secondary};
    padding-block: 20px;
    padding-inline: 60px;

    & div {
        display: flex;
    }
    
    ${StyledGameCard} {
        height: 260px;
        min-width: 220px;
    }
`