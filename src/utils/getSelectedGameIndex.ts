import {GameModel} from "../models/GameModel.ts";

export const getSelectedGameIndex = (games: GameModel[], selectedGame: GameModel) => {
    return games.findIndex((game) => game.title === selectedGame.title);
}
