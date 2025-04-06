import styled from "styled-components";

export const GameList = styled.ul`
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    gap: 20px;
    padding-block: 15px;
    list-style: none;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`