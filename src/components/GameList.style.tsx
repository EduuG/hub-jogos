import styled from "styled-components";
import { StyledGameCard } from "./GameCard.style.tsx";

export const GameListContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

export const GameList = styled.ul<{ size: "small" | "medium" | "large", isMobile: boolean }>`
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    gap: 20px;
    padding-block: 20px;
    list-style: none;
    scrollbar-width: none;
    -ms-overflow-style: none;
    margin: 0;
    
    &::-webkit-scrollbar {
        display: none;
    }

    & > li:first-child {
        margin-left: 120px;

        @media (max-width: 1366px) {
          margin-left: 20px;
        }
    }

    ${StyledGameCard} {
        min-width: ${({ size, isMobile }) =>
    size === "medium" || size === "large"
      ? isMobile
        ? "240px"
        : "540px"
      : "200px"
  };

        height: ${({ size, isMobile }) =>
    size === "large"
      ? isMobile
        ? "440px"
        : "640px"
      : "300px"
  };
    }
`;

export const ArrowButton = styled.div<{ direction: "left" | "right", isVisible: boolean }>`
    position: absolute;
    top: 50%;
    ${({ direction }) => direction}: 0;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;
    display: ${({ isVisible }) => (isVisible ? "block" : "none")};
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 0.8;
    }
`;
