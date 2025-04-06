import {Game} from "../models/Game.tsx";
import {FC} from "react";
import {GameTitle, StyledGameCard} from "./GameCard.style.tsx";

const GameCard: FC<Game> = ({title, playersCount}: Game) => {
    return (
      <StyledGameCard>
          <p>{playersCount?.toString() ?? "0"}</p>
          <GameTitle>{title ?? "Sem título"}</GameTitle>
      </StyledGameCard>
    );
}

export default GameCard;