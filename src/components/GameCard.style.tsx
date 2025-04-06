import styled from "styled-components";
import {theme} from "../Theme.tsx";

export const StyledGameCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    width: 120px;
    height: 50px;
    background-color: blue;
    border-radius: 15px;
    transition-property: box-shadow, transform;
    transition-duration: 350ms;
    transition-timing-function: ease;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.24);
    
    &:hover {
        box-shadow: 0 0 0 2px ${theme.palette.primary}, 0px 8px 10px 1px rgba(0, 0, 0, 0.2);
        color: ${theme.palette.primary};
        transform: translateY(-8px);
    }
`

export const GameTitle = styled.span`
    display: block;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: bold;
`;
