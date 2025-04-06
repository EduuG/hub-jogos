import { GameModel } from "../models/GameModel.ts";
import { FC, useEffect, useRef, useState } from "react";
import GameCard from "./GameCard.tsx";
import { GameList } from "./GameList.style.tsx";
import { CategoryHeader, StyledCategory } from "./Category.style.tsx";
import { CategoriesEnum } from "../enums/CategoriesEnum.ts";
import { MoveRight } from "lucide-react";
import { getSelectedGameIndex } from "../utils/getSelectedGameIndex.ts";
import { useIsMobile } from "../utils/isMobile.ts";
import {CategoryModel} from "../models/CategoryModel.ts";

interface CategoryProps {
  title?: string;
  games: GameModel[];
  sortByPlayers?: boolean;
  sortByCategory?: CategoriesEnum;
  showBackground?: boolean;
  hideShowMore?: boolean;
  size?: "small" | "medium" | "large";
  categories: CategoryModel[];
}

const Category: FC<CategoryProps> = ({ title, games, sortByPlayers, sortByCategory, showBackground, size = "small", hideShowMore, categories }: CategoryProps) => {
  const [selectedGame, setSelectedGame] = useState<GameModel | null>(null);
  const gameListRef = useRef<HTMLUListElement>(null);

  const isMobile = useIsMobile();

  const getFilteredAndSortedGames = () => {
    let gameList = [...games];

    if (sortByPlayers) {
      gameList = gameList.sort((a, b) => b.playersCount - a.playersCount);
    }

    if (sortByCategory) {
      gameList = gameList.filter(game => game.categoryId === sortByCategory);
    }

    return gameList;
  };

  const filteredGames = getFilteredAndSortedGames();

  const mostPopular = filteredGames.length > 0
    ? filteredGames.reduce((max, current) =>
      current.playersCount > max.playersCount ? current : max
    )
    : null;

  const onGameCardClick = (game: GameModel) => {
    setSelectedGame(game);
  };

  useEffect(() => {
    if (selectedGame && gameListRef.current) {
      const selectedIndex = getSelectedGameIndex(filteredGames, selectedGame);
      const selectedCard = gameListRef.current.children[selectedIndex] as HTMLElement;
      if (selectedCard) {
        const offset = selectedCard.offsetLeft - (gameListRef.current.offsetWidth / 2) + (selectedCard.offsetWidth / 2);
        gameListRef.current.scrollTo({
          left: offset,
          behavior: 'smooth',
        });
      }
    }
  }, [selectedGame, filteredGames]);

  return (
    <StyledCategory background={showBackground ? mostPopular?.cover.large || "" : ""}>
      <CategoryHeader>
        <h2>{title}</h2>
        {!hideShowMore &&
          <a href={"#"}>VER MAIS <MoveRight /></a>
        }
      </CategoryHeader>

      <GameList ref={gameListRef} size={size} isMobile={isMobile}>
        {filteredGames.map((game) => (
            <GameCard
                key={game.id}
                game={game}
                coverSize={size === "medium" ? "large" : "medium"}
                cardSize={size}
                onClick={() => onGameCardClick(game)}
                categories={categories}
            />
        ))}
      </GameList>
    </StyledCategory>
  );
};

export default Category;
