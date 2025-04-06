import styled from 'styled-components'
import { theme } from "../Theme.tsx";

export const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #33333366;
    backdrop-filter: blur(15px);
    padding-inline: 30px;
    z-index: 9999;
    box-shadow: ${theme.shadows.primary};
`

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const StyledFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-height: 600px;
    background-color: ${theme.colors.background.secondary};
    padding-block: 50px;
    padding-inline: 120px;

    @media (max-width: 1366px) {
        padding-inline: 20px;
    }
`

export const FooterSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    gap: 30px;
    padding-block: 10px;
    
    & h3 {
        margin-bottom: 10px;
    }
`

export const Divider = styled.hr`
    border: 1px solid ${theme.colors.divider.primary};
    width: 100%;
    margin-block: 10px;
`
