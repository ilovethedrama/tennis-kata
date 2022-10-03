import { render, screen } from "@testing-library/react";
import { playerWinsGame, playerWinsPoint } from "../helpers/helpers";
import { PointsState, GameState } from "../types/game";

describe("Tennis game", () => {
  it("handle player one winning a point when the game starts at 0", () => {
    const playerOnePoint: PointsState = { points: [0, 0] };
    const onePoint = playerWinsPoint(playerOnePoint, 1);
    expect(onePoint).toEqual([15, 0]);
  })

  it("handle player one winning a point when the game score is 15 - 0", () => {
    const playerTwoPoints: PointsState = { points: [15, 0] };
    const twoPoints = playerWinsPoint(playerTwoPoints, 1);
    expect(twoPoints).toEqual([30, 0]);
  })

  it("handle player one winning a point when the game score is 30 - 0", () => {
    const playerThreePoints: PointsState = { points: [30, 0] };
    const threePoints = playerWinsPoint(playerThreePoints, 1);
    expect(threePoints).toEqual([40, 0]);
  })

  it("handle player one winning a game when not in deuce", () => {
    const playerOneGame: GameState = { 
      sets: [0,0],
      games: [0,0],
      points: [40,0]
    };

    const oneGame = playerWinsGame(playerOneGame, 1)
    expect(oneGame).toEqual({"game": [1, 0], "points": [0, 0]});
  })

  it('handle player one winning an advantage point when the score is 40-40', () => {
    const playerWinsAdvPoint: GameState = { 
      sets: [0,0],
      games: [0,0],
      points: [40,40]
    };

    const oneGame = playerWinsPoint(playerWinsAdvPoint, 1)
    expect(oneGame).toEqual(["Advantage","-"]);
  })

  it('handle player one winning a game when in deuce', () => {
    const playerWinsAdvPoint: GameState = { 
      sets: [0,0],
      games: [0,0],
      points: ["Advantage","-"]
    };

    const oneGame = playerWinsGame(playerWinsAdvPoint, 1)
    expect(oneGame).toEqual({"game": [1,0], "points": [0,0]});
  })

  it('handle incrementing of player one winning games', () => {
    const playerWinsAdvPoint: GameState = { 
      sets: [0,0],
      games: [5,0],
      points: [40,30]
    };

    const oneGame = playerWinsGame(playerWinsAdvPoint, 1)
    expect(oneGame).toEqual({"game": [6,0], "points": [0,0]});
  })
});
