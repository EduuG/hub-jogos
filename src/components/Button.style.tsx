import styled from "styled-components";
import {theme} from "../Theme.tsx";

export const StyledButton = styled.button<{color?: "primary" | "secondary" }>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({color}) => color === "secondary" ? theme.colors.button.background.secondary : theme.colors.button.background.primary};
    border-color: ${theme.colors.button.border.primary};
    border-radius: 6px;
    color: ${({color}) => color === "secondary" ? theme.colors.button.text.secondary : theme.colors.button.text.primary };
    width: 140px;
    height: 45px;
    padding-inline: 10px;
    font-weight: bold;
`