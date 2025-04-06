import {Game} from "../models/Game.tsx";
import {FC} from "react";
import {StyledCategory} from "./Sections.style.tsx";
import GameCard from "./GameCard.tsx";
import {GameList} from "./GameList.style.tsx";

interface CategoryProps {
    title: string;
    games?: Game[];
}

const Category: FC<CategoryProps> = ({title, games}: CategoryProps) => {
    return (
        <StyledCategory>
            <h2>{title}</h2>

            <GameList>
                {games?.map((game) => (
                    <GameCard title={game.title} playersCount={game.playersCount} cover={game.cover} categoryId={game.categoryId}/>
                ))}
            </GameList>
        </StyledCategory>
    )
}

export default Category;