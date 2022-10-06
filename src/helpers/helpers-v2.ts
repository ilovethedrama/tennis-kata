import { gameState, playerState } from "../types/playerState";

export function playerWinsPoint(score: gameState, currentPlayer: string) {
  const playerOne = score.playerOne;
  const playerTwo = score.playerOne;
  switch (currentPlayer) {
    case "Player One":
      switch (score.playerOne.points) {
        case 0:
          return { ...playerOne, points: 15 };
        case 15:
          return { ...playerOne, points: 30 };
        case 30:
          return { ...playerOne, points: 40 };
        case 40:
          return { ...playerOne, points: 0 };
        case "-":
          return { ...playerOne, points: "Adv" };
      }
      return playerOne;
    }
    return playerOne;
}
