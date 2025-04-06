import {GameModel} from "../models/GameModel.ts";
import {FC} from "react";
import {GameDesc, GameTitle, PlayButton, PlayersCount, StyledGameCard} from "./GameCard.style.tsx";
import {Play, Tags, UsersRound} from "lucide-react";
import {StyledButton} from "./Button.style.tsx";
import {CategoryModel} from "../models/CategoryModel.ts";

interface GameCardProps {
    game: GameModel;
    coverSize: "medium" | "large";
    cardSize?: "small" | "medium" | "large";
    onClick?: () => void;
    className?: string;
    categories: CategoryModel[];
}

const GameCard: FC<GameCardProps> = ({game, coverSize, cardSize, onClick, className, categories}: GameCardProps) => {
    return (
        <StyledGameCard cover={game.cover} size={coverSize} onClick={onClick} className={className}>
            <PlayersCount><UsersRound size={15}/> {game.playersCount?.toString() ?? "0"}</PlayersCount>

            {cardSize === "large" ?
                <div>
                    <h4 style={{ display: "flex", gap: "3px", alignItems: "center" }}><Tags size={14} />{categories.find((category) => category.id.toString() === game.categoryId.toString())?.name || "N/A"}</h4>
                    <GameTitle>{game.title ?? "Sem título"}</GameTitle>
                    <GameDesc>Exemplo de descrição</GameDesc>

                    <StyledButton color={"secondary"} style={{ marginTop: "20px" }}>Jogar agora</StyledButton>
                </div>

                :

                <div>
                    <GameTitle>{game.title ?? "Sem título"}</GameTitle>
                </div>
            }

            <PlayButton>
                <Play/>
            </PlayButton>
        </StyledGameCard>
    );
}

export default GameCard;