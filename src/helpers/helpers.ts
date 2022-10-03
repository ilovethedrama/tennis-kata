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

const incrementGame = (state: GameState, player: Player) => {
  let currentGame = player === 1 ? state.games[0] : state.games[1]  
  let newState
  let updatedState
  if(currentGame === 6) {
    const currentSetCount = incrementSet(state, player)
     newState = currentSetCount;
    return newState
  }
  
  currentGame++
  if(player === 1) {
    updatedState = { ...state, points: [0, 0], games: [currentGame, state.games[1]]} 
  } else {
    updatedState = { ...state, points: [0, 0], games: [state.games[0], currentGame]} 
  }
  newState = updatedState;
  return newState
}

const incrementSet = (state: GameState, player: Player) => {
  let currentSet = player === 1 ? state.sets[0] : state.sets[1]  
  let updatedState
  if(currentSet === 3) {
    const updatedState = { ...state, points: [0, 0], games: [0, 0], sets:[currentSet, state.sets[1]] } 
    return updatedState
  }
  
  currentSet++
  if(player === 1) {
    updatedState = { ...state, points: [0, 0], games: [0, 0], sets:[currentSet, state.sets[1]]} 
  } else {
    updatedState = { ...state, points: [0, 0], games: [0, 0], sets:[state.sets[0], currentSet]} 
  }

  return updatedState;
}

export const playerWinsGame = (state: GameState, player: Player) => {
  if(player === 1) {
    if(state.points[0] === 40 && state.points[1] !== 40 && state.points[1] !== "Advantage") {
      const updatedScores = incrementGame(state, player);
      return updatedScores
    }
    if(state.points[0] === "Advantage" && state.points[1] === "-" ) {
      const updatedScores = incrementGame(state, player);
      return updatedScores
    }
  } else {
    if(state.points[1] === 40 && state.points[0] !== 40 && state.points[0] !== "Advantage") {
      const updatedScores = incrementGame(state, player);
      return updatedScores
    }
  }
}
