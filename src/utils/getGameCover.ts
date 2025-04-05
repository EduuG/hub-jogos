import {GameCover} from "../models/GameCover.tsx";

export function getGameCover(cover: GameCover, size: "medium" | "large") {
    const coverUrl = size === "medium" ? cover.medium : cover.large;
    return coverUrl ? `url(${coverUrl})` : "none";
}