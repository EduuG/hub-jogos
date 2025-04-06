import styled from "styled-components";
import {theme} from "../Theme.tsx";

export const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const FooterSocialMedia = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.divider.primary};
    padding: 10px;
    border-radius: ${theme.border.radius};
    cursor: pointer;
    background: transparent;
    position: relative;
    overflow: hidden;
    transition: all 350ms ease;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        opacity: 0;
        transition: opacity 350ms ease;
    }

    &:hover {
        &::after {
            opacity: 1;
        }
    }
`

export const RatingInfo = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    background: ${theme.colors.background.primary};
    padding: 15px;
    border-radius: ${theme.border.radius};
    
    & img {
        width: 60px;
        height: auto;
    }
`
