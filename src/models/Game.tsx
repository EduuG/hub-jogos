import {GameCover} from "./GameCover.tsx";

export interface Game {
    title: string;
    playersCount: number;
    cover: GameCover;
    categoryId: number;
}