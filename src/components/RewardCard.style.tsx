import styled from "styled-components";
import { theme } from "../Theme";

export const StyledRewardCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, ${theme.colors.background.secondary} 130%, ${theme.colors.background.secondary} 59%, ${theme.colors.background.secondary} 100%);
  padding-block: 20px;
  margin-inline: 120px;
  border-radius: ${theme.border.radius};
  height: 400px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 10px 10px;

  @media (max-width: 1366px) {
    margin-inline: 20px;
  }
    
  @media (max-width: 1100px) {
      justify-content: center;
  }
`
