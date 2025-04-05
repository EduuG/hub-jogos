import {Game} from "../models/Game.tsx";
import {FC} from "react";
import {GameTitle, PlayersCount, StyledGameCard} from "./GameCard.style.tsx";
import {UsersRound} from "lucide-react";

interface GameCardProps {
    game: Game;
    size: "medium" | "large";
    onClick?: () => void;
    className?: string;
}

const GameCard: FC<GameCardProps> = ({game, size, onClick, className}: GameCardProps) => {
    return (
      <StyledGameCard cover={game.cover} size={size} onClick={onClick} className={className}>
          <PlayersCount><UsersRound size={15}/> {game.playersCount?.toString() ?? "0"}</PlayersCount>
          <GameTitle>{game.title ?? "Sem título"}</GameTitle>
      </StyledGameCard>
    );
}

export default GameCard;