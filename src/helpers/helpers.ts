import { Game, GameState, Player, PointsState } from "../types/game";



export const playerWinsPoint = (state: PointsState, player: Player) => {
  let score;
  if(player === 1) {
    if(state.points[0] === 0) {
      const player = { points: [15, state.points[1]] }
      score = player.points
      return score;
    }
    if(state.points[0] === 15) {
      const player = { points: [30, state.points[1]] }
      score = player.points
      return score;
    }
    if(state.points[0] === 30) {
      const player = { points: [40, state.points[1]] }
      score = player.points
      return score;
    } 
  } else {
    if(state.points[1] === 0) {
      const player = { points: [15, state.points[0]] }
      score = player.points
      return score;
    }
    if(state.points[1] === 15) {
      const player = { points: [30, state.points[0]] }
      score = player.points
      return score;
    }
    if(state.points[1] === 30) {
      const player = { points: [40, state.points[0]] }
      score = player.points
      return score;
    }
  }
}

const incrementGame = (currentGame: Game) => {
  if(currentGame === 7) {
    return currentGame;
  }

  currentGame++
  return currentGame;
}

export const playerWinsGame = (state: GameState, player: Player) => {
  if(player === 1) {
    if(state.points[0] === 40 && state.points[1] !== 40 && state.points[1] !== "Advantage") {
      const currentGameCount = incrementGame(state.games[0]);
      const player = { points: [0, 0], game: [currentGameCount, state.games[1]] } 
      return {
        game: player.game,
        points: player.points
      }
    }
    if(state.points[0] === "Advantage" && state.points[1] === "-" ) {
      const currentGameCount = incrementGame(state.games[0]);
      const player = { points: [0, 0], game: [currentGameCount, state.games[1]] } 
      return {
        game: player.game,
        points: player.points
      }
    }
  } else {
    if(state.points[1] === 40 && state.points[0] !== 40 && state.points[0] !== "Advantage") {
      const currentGameCount = incrementGame(state.games[1]);
      const player = { points: [0, 0], game: [state.games[0], currentGameCount] } 
      return {
        game: player.game,
        points: player.points
      }
    }
  }
}
