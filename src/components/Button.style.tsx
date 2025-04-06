import styled from "styled-components";
import {theme} from "../Theme.tsx";

export const StyledButton = styled.button<{color?: "primary" | "secondary" }>`
    background-color: ${({theme, color}) => color === "secondary" ? theme.colors.button.background.secondary : theme.colors.button.background.primary};
    border-color: ${({theme}) => theme.colors.button.border.primary};
    border-radius: 6px;
    color: ${({theme, color}) => color === "secondary" ? theme.colors.button.text.secondary : theme.colors.button.text.primary };
    width: 140px;
    height: 45px;
`