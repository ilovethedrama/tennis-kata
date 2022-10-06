import { playerState } from "../types/playerState";

export function playerWinsPoint(player: playerState) {
  switch (player.points) {
    case 0:
      return { ...player, points: 15 };
    case 15:
      return { ...player, points: 30 };
    case 30:
      return { ...player, points: 40 };
    case '-':
      return { ...player, points: 'Adv' };
      default:
        return player;
  }
}
