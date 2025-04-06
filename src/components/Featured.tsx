import { GameModel } from "../models/GameModel.ts";
import GameCard from "./GameCard.tsx";
import { FC, useEffect, useRef, useState } from "react";
import { FeaturedGameList, FeaturedWrapper, GameInfo, StyledFeatured } from "./Featured.style.tsx";
import { StyledButton } from "./Button.style.tsx";
import { Dot, Heart, Play, Sparkles, Tags } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { getSelectedGameIndex } from "../utils/getSelectedGameIndex.ts";
import { CategoryModel } from "../models/CategoryModel.ts";

interface FeaturedProps {
    games: GameModel[];
    categories: CategoryModel[];
}

const Featured: FC<FeaturedProps> = ({ games, categories }: FeaturedProps) => {
    const [selectedGame, setSelectedGame] = useState<GameModel | null>(null);
    const [categoriesLoaded, setCategoriesLoaded] = useState<boolean>(false);
    const gameListRef = useRef<HTMLUListElement>(null);

    const isMediumScreenSize = useMediaQuery({ query: '(max-width: 1366px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const onGameCardClick = (game: GameModel) => {
        setSelectedGame(game);
    };

    useEffect(() => {
        if (categories.length > 0) {
            setCategoriesLoaded(true);
        }

        if (games.length > 0) {
            setSelectedGame((prevSelectedGame) => {
                return prevSelectedGame || games[0];
            });
        }
    }, [games, categories]);

    useEffect(() => {
        if (selectedGame && gameListRef.current && isMediumScreenSize) {
            const selectedIndex = getSelectedGameIndex(games, selectedGame);
            const selectedCard = gameListRef.current.children[selectedIndex] as HTMLElement;
            if (selectedCard) {
                const offset = selectedCard.offsetLeft - (gameListRef.current.offsetWidth / 2) + (selectedCard.offsetWidth / 2);
                gameListRef.current.scrollTo({
                    left: offset,
                    behavior: 'smooth',
                });
            }
        }
    }, [selectedGame, games, isMediumScreenSize]);

    if (!selectedGame || !categoriesLoaded) return null;

    return (
        <StyledFeatured background={isMobile ? selectedGame.cover.medium : selectedGame.cover.large} isMobile={isMediumScreenSize}>
            <FeaturedWrapper>
                <FeaturedGameList ref={gameListRef} isMobile={isMediumScreenSize}>
                    {games.map((game) => (
                        <GameCard
                            key={game.id}
                            game={game}
                            coverSize={isMobile ? "medium" : "large"}
                            onClick={() => onGameCardClick(game)}
                            className={selectedGame.id === game.id ? "active" : ""}
                            categories={categories}
                        />
                    ))}
                </FeaturedGameList>

                <GameInfo>
                    <div>
                        <h1>{selectedGame.title}</h1>
                    </div>

                    <div style={{ display: "flex" }}>
                        <h4><Tags size={14} /> {categories.find((category) => category.id.toString() === selectedGame.categoryId.toString())?.name || "N/A"}</h4>
                        <Dot />
                        <h4><Sparkles size={14} /> Novidade</h4>
                    </div>

                    <div style={{ marginTop: "30px" }}>
                        <p>Possível descrição do jogo</p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "70px" }}>
                        <StyledButton color={"secondary"}>{!isMediumScreenSize && `Adicionar aos favoritos`} <Heart /></StyledButton>
                        <StyledButton>{!isMediumScreenSize && `Jogar agora`} <Play /></StyledButton>
                    </div>
                </GameInfo>
            </FeaturedWrapper>
        </StyledFeatured>
    );
};

export default Featured;