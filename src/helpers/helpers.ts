import { Game, GameState, Player, PointsState } from "../types/game";



export const playerWinsPoint = (state: PointsState, player: Player) => {
  const playerOneScore = state.points[0];
  const playerTwoScore = state.points[1];
  if(player === 1) {
    if(playerOneScore === 0) {
      return [15, state.points[1]] 
    }
    if(playerOneScore === 15) {
      return [30, state.points[1]];
    }
    if(playerOneScore === 30) {
      return [40, state.points[1]]
    } 
    if(playerOneScore === 40 && playerOneScore === 40) {
      return ["Advantage", "-"]
    } 
  } 

  if(player === 2) {
    if(playerTwoScore === 0) {
      return [15, state.points[0]];
    }
    if(playerTwoScore === 15) {
      return [30, state.points[0]];
    }
    if(playerTwoScore === 30) {
      return [40, state.points[0]];
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
