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
      return [state.points[0], 15];
    }
    if(playerTwoScore === 15) {
      return [state.points[0], 30];
    }
  }
}

const incrementGame = (state: GameState, player: Player) => {
  const playerOne = state.games[0]
  const playerTwo = state.games[1]
  const currentGame = player === 1 ? playerOne : playerTwo;  
  const updatedGame = currentGame + 1;

  if(currentGame === 6) {
    const currentSetCount = incrementSet(state, player)
    return currentSetCount
  }
  
  if(player === 1) {
    return { ...state, points: [0, 0], games: [updatedGame, state.games[1]]} 
  } else {
    return { ...state, points: [0, 0], games: [state.games[0], updatedGame]} 
  }
}

const incrementSet = (state: GameState, player: Player) => {
  const playerOne = state.sets[0];
  const playerTwo = state.sets[1];
  const currentSet = player === 1 ? playerOne : playerTwo;  
  const updatedSet = currentSet + 1;
     
  if(player === 1) {
    return { ...state, points: [0, 0], games: [0, 0], sets:[updatedSet, playerTwo]} 
  } else {
    return { ...state, points: [0, 0], games: [0, 0], sets:[playerOne, updatedSet]} 
  }
}

export const playerWinsGame = (state: GameState, player: Player) => {
  const playerOneScore = state.points[0];
  const playerTwoScore = state.points[1];
  
  if(player === 1) {
    if(playerOneScore === 40 && playerTwoScore !== 40 && playerTwoScore !== "Advantage") {
      const updatedScores = incrementGame(state, player);
      return updatedScores
    }
    if(playerOneScore === "Advantage" && playerTwoScore === "-" ) {
      const updatedScores = incrementGame(state, player);
      return updatedScores
    }
  } else {
    if(playerTwoScore === 40 && playerOneScore !== 40 && playerOneScore !== "Advantage") {
      const updatedScores = incrementGame(state, player);
      return updatedScores
    }
  }
}
