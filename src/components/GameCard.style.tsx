import styled from "styled-components";
import { theme } from "../Theme.tsx";
import { getGameCover } from "../utils/getGameCover.ts";
import { GameCoverModel } from "../models/GameCoverModel.ts";

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

export const GameDesc = styled.span`
    display: block;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${theme.colors.text.secondary};
    font-size: 1rem;
`;

export const PlayButton = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${theme.palette.primary}cc;
    border-radius: 50%;
    border-width: 0;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease, background-color 0.3s ease;
    cursor: pointer;

    svg {
        color: white;
        font-size: 1.5rem;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.7);
    }
`;

export const StyledGameCard = styled.li.withConfig({
    shouldForwardProp: (prop) => prop !== "cover",
})<{ cover: GameCoverModel, size: "medium" | "large" }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    width: 120px;
    height: 50px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 40%, rgba(40, 40, 40, 1) 100%),
    ${({cover, size}) => getGameCover(cover, size)};
    background-position: center;
    background-size: cover;
    border-radius: ${theme.border.radius};
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
        border-radius: ${theme.border.radius};
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

    &:hover {
        ${PlayButton} {
            opacity: 1;
            visibility: visible;
        }
    }
`;

export const PlayersCount = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    background-color: ${theme.colors.background.secondary}aa;
    backdrop-filter: blur(3px);
    width: fit-content;
    height: 25px;
    border-radius: 60px;
    padding-inline: 10px;
    font-size: 0.875rem;
    font-weight: bold;
`;
