import { Game } from "../models/Game.tsx";
import { FC } from "react";
import GameCard from "./GameCard.tsx";
import { GameList } from "./GameList.style.tsx";
import { CategoryHeader, StyledCategory } from "./Category.style.tsx";
import { CategoriesEnum } from "../enums/CategoriesEnum.ts";
import { MoveRight } from "lucide-react";

interface CategoryProps {
    title?: string;
    games: Game[];
    sortByPlayers?: boolean;
    sortByCategory?: CategoriesEnum;
    showBackground?: boolean;
    hideShowMore?: boolean;
    size?: "medium" | "large";
}

const Category: FC<CategoryProps> = ({ title, games, sortByPlayers, sortByCategory, showBackground, size = "medium", hideShowMore }: CategoryProps) => {
    let gameList = games;

    if (sortByPlayers) {
        gameList = gameList.sort((a, b) => b.playersCount - a.playersCount);
    }

    if (sortByCategory) {
        gameList = gameList.filter(game => game.categoryId === sortByCategory);
    }

    const mostPopular = games.length > 0
        ? gameList.reduce((max, current) =>
            current.playersCount > max.playersCount ? current : max
        )
        : null;

    return (
        <StyledCategory background={showBackground ? mostPopular?.cover.large || "" : ""}>
            <CategoryHeader>
                <h2>{title}</h2>
                {!hideShowMore &&
                    <a href={""}>VER MAIS <MoveRight /></a>
                }
            </CategoryHeader>

            <GameList size={size}>
                {gameList?.map((game) => (
                    <GameCard game={game} size={size === "large" ? "large" : "medium"} />
                ))}
            </GameList>
        </StyledCategory>
    )
}

export default Category;