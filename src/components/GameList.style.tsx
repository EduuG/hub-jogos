import styled from "styled-components";
import {StyledGameCard} from "./GameCard.style.tsx";

export const GameList = styled.ul<{size: "medium" | "large"}>`
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    gap: 20px;
    padding-block: 20px;
    list-style: none;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
    
    & > li:first-child {
        margin-left: 50px;
    }
    
    ${StyledGameCard} {
        min-width: ${({size}) => size === "large" ? "540px" : "200px"};
    }
`
