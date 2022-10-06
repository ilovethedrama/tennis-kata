import { playerState } from "../types/playerState";

export function playerWinsPoint(score: playerState, currentPlayer: string) {
  const currentScorer = currentPlayer;
  switch (currentScorer) {
    case "Player One":
      switch (score.points) {
        case 0:
          return { ...score, points: 15 };
        case 15:
          return { ...score, points: 30 };
        case 30:
          return { ...score, points: 40 };
        case "-":
          return { ...score, points: "Adv" };
      }
      break;
    }
      return score;
}
