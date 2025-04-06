import styled from 'styled-components'

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
`

export const MainContent = styled.div`
    //padding-top: 70px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const StyledFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 400px;
    background-color: grey;
`
