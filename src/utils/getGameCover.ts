import {GameCoverModel} from "../models/GameCoverModel.ts";

export function getGameCover(cover: GameCoverModel, size: "small" | "medium" | "large") {
    const coverUrl = size === "medium" ? cover.medium : cover.large;
    return coverUrl ? `url(${coverUrl})` : "none";
}