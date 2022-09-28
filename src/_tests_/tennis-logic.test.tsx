import { render, screen } from "@testing-library/react";
import { playerWinsGame, playerWinsPoint } from "../helpers/helpers";
import { PointsState, GameState } from "../types/game";

describe("Tennis game", () => {
  it("handle player one winning points but not the game", () => {
    const playerOnePoint: PointsState = { points: [0, 0] };
    const playerTwoPoints: PointsState = { points: [15, 0] };
    const playerThreePoints: PointsState = { points: [30, 0] };

    const onePoint = playerWinsPoint(playerOnePoint, 1);
    const twoPoints = playerWinsPoint(playerTwoPoints, 1);
    const threePoints = playerWinsPoint(playerThreePoints, 1);

    expect(onePoint).toEqual([15, 0]);
    expect(twoPoints).toEqual([30, 0]);
    expect(threePoints).toEqual([40, 0]);
  })

  it("handle player one winning a game when not in deuce", () => {
    const playerOneGame: GameState = { 
      sets: [0,0],
      games: [0,0],
      points: [40,30]
    };

    const oneGame = playerWinsGame(playerOneGame, 1)
    expect(oneGame).toEqual({"game": [1, 0], "points": [0, 0]});
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
