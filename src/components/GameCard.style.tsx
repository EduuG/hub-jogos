import styled from "styled-components";
import { theme } from "../Theme.tsx";
import {getGameCover} from "../utils/getGameCover.ts";
import {GameCover} from "../models/GameCover.tsx";

export const GameTitle = styled.span`
    display: block;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: bold;
    color: ${theme.colors.text.primary};
    transition: color 350ms ease;
`;

export const StyledGameCard = styled.li<{ cover: GameCover, size: "medium" | "large" }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    width: 120px;
    height: 50px;
    background: 
            linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 40%, rgba(40, 40, 40, 1) 100%),
            ${({ cover, size }) => getGameCover(cover, size)};
    background-size: cover;
    border-radius: 15px;
    color: ${theme.colors.text.primary};
    transition-property: box-shadow, transform, color;
    transition-duration: 350ms;
    transition-timing-function: ease;
    box-shadow: ${theme.shadows.primary};
    cursor: pointer;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: transparent;
        border-radius: 15px;
        transition: background 350ms ease;
        z-index: -1;
    }

    &:hover, &.active {
        box-shadow: 0 0 0 2px ${theme.palette.primary}, 0px 8px 10px 1px rgba(0, 0, 0, 0.2);
        transform: translateY(-8px);

        ${GameTitle} {
            color: ${theme.palette.primary};
            transition: color 350ms ease;
        }

        &::after {
            background: rgba(0, 0, 0, 0.3);
        }
    }
`

export const PlayersCount = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    background-color: ${theme.colors.background.secondary}aa;
    width: fit-content;
    height: 25px;
    border-radius: 60px;
    padding-inline: 10px;
    font-size: 14px;
    font-weight: bold;
`
