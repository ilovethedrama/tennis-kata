import { Game, GameState, Player, PointsState } from "../types/game";



export const playerWinsPoint = (state: PointsState, player: Player) => {
  const playerOneScore = state.points[0];
  const playerTwoScore = state.points[1];
  if(player === 1) {
    if(playerOneScore === 0) {
      const updatedScore = [15, state.points[1]]
      return updatedScore 
    }
    
    if(playerOneScore === 15) {
      const updatedScore = [30, state.points[1]]
      return updatedScore;
    }
    if(playerOneScore === 30) {
      const updatedScore = [40, state.points[1]]
      return updatedScore;
    } 
  } 

  if(player === 2) {
    if(playerTwoScore === 0) {
      const updatedScore = [15, state.points[0]]
      return updatedScore;
    }
    if(playerTwoScore === 15) {
      const updatedScore = [30, state.points[0]]
      return updatedScore;
    }
    if(playerTwoScore === 30) {
      const updatedScore = [40, state.points[0]]
      return updatedScore;
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
