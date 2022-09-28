import { GameState, Player, PointsState } from "../types/game";



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

export const playerWinsGame = (state: GameState, player: Player) => {
  if(player === 1) {
    if(state.points[0] === 40 && state.points[1] !== 40 && state.points[1] !== "Advantage") {
      const player = {points: [0, 0], game: [1, 0]} 
      return {
        game: player.game,
        points: player.points
      }
    }
    if(state.points[0] === "Advantage" && state.points[1] === "-" ) {
      const player = {points: [0, 0], game: [1, 0]} 
      return {
        game: player.game,
        points: player.points
      }
    }
  } else {
    if(state.points[1] === 40 && state.points[0] !== 40 && state.points[0] !== "Advantage") {
      const player = {points: [0, 0], game: [0, 1]} 
      return {
        game: player.game,
        points: player.points
      }
    }
  }
}
