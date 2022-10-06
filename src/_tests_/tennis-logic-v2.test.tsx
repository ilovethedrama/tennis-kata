import { render, screen } from "@testing-library/react";
import { playerWinsPoint } from "../helpers/helpers-v2";

describe("Tennis game", () => {
  describe("Player One", () => {
    it("handle player one winning a point when the game starts at 0", () => {
      const playerOne = { points: 0, games: 0, sets: 0, matchesWon: 0 };
      const playerOneScore = playerWinsPoint(playerOne);
      expect(playerOneScore.points).toEqual(15);
    });
    it("handle player one winning a second point when the game score starts at 15", () => {
      const playerOne = { points: 15, games: 0, sets: 0, matchesWon: 0 };
      const playerOneScore = playerWinsPoint(playerOne);
      expect(playerOneScore.points).toEqual(30);
    });
  });
});
