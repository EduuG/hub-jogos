import {GameCoverModel} from "./GameCoverModel.ts";

export interface GameModel {
    id: number;
    title: string;
    playersCount: number;
    cover: GameCoverModel;
    categoryId: number;
}