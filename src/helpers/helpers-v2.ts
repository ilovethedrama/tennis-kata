import { playerState } from "../types/playerState";

export function playerWinsPoint(player: playerState) {
  if (player.points === 0) return { ...player, points: 15 };
  return player;
}
