import styled from "styled-components";
import { theme } from "../Theme.tsx";

export const StyledCategory = styled.section<{ background: string }>`
    position: relative;
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding-block: 20px;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: ${({ background }) => `url(${background})`};
        background-size: cover;
        background-position: center;
        mask-image:
                linear-gradient(to bottom, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 85%);
        z-index: 0;
    }

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background-color: ${theme.colors.background.primary};
        backdrop-filter: blur(3px);
        opacity: 0.8;
        z-index: 1;
    }

    & > * {
        position: relative;
        z-index: 2;
    }
`;

export const CategoryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 120px;

    & a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        color: ${theme.colors.text.secondary};
        text-decoration: none;
        font-weight: bold;
        transition: color 350ms ease;
        text-shadow: 0 0 6px rgba(255,255,255,0.3);
        
        &:hover {
            color: ${theme.colors.text.primary};
        }
    }

    @media (max-width: 1366px) {
      padding-inline: 20px;
    }
`