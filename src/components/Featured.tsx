import { Game } from "../models/Game.tsx";
import GameCard from "./GameCard.tsx";
import { FC, useEffect, useState } from "react";
import { FeaturedGameList, FeaturedWrapper, GameInfo, StyledFeatured } from "./Featured.style.tsx";
import { StyledButton } from "./Button.style.tsx";
import { Dot, Heart, Play, Sparkles, Tags } from "lucide-react";

interface FeaturedProps {
    games: Game[];
    categories: string[];
}

const Featured: FC<FeaturedProps> = ({ games, categories }: FeaturedProps) => {
    const [selectedGame, setSelectedGame] = useState<Game | null>(null);

    const onGameCardClick = (game: Game) => {
        setSelectedGame(game);
    };

    useEffect(() => {
        if (games.length > 0) {
            setSelectedGame((prevSelectedGame) => {
                return prevSelectedGame || games[0];
            });
        }
    }, [games]);

    if (!selectedGame) return null;

    return (
        <StyledFeatured background={selectedGame.cover.large}>
            <FeaturedWrapper>
                <FeaturedGameList>
                    {games.map((game, index) => (
                        <GameCard
                            key={index}
                            game={game}
                            size={"large"}
                            onClick={() => onGameCardClick(game)}
                            className={selectedGame.title === game.title ? "active" : ""}
                        />
                    ))}
                </FeaturedGameList>

                <GameInfo>
                    <div>
                        <h1>{selectedGame.title}</h1>
                    </div>

                    <div style={{ display: "flex", gap: "10px" }}>
                        <h4><Tags /> {categories[selectedGame.categoryId]}</h4>
                        <Dot />
                        <h4><Sparkles /> Novidade</h4>
                    </div>

                    <div style={{ display: "flex", gap: "80px" }}>
                        <StyledButton color={"secondary"}>Adicionar aos favoritos <Heart /></StyledButton>
                        <StyledButton>Jogar agora <Play /></StyledButton>
                    </div>
                </GameInfo>
            </FeaturedWrapper>
        </StyledFeatured>
    );
};

export default Featured;
