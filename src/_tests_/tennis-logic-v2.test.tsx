import { render, screen } from "@testing-library/react";
import { playerWinsPoint } from "../helpers/helpers-v2";

describe("Tennis game", () => {
  describe("Player One", () => {
    it("handle player one winning a point when the game starts at 0", () => {
      const playerOne = { points: 0, games: 0, sets: 0, matchesWon: 0 };
      const playerOneScore = playerWinsPoint(playerOne);
      expect(playerOneScore.points).toEqual(15);
    });
    it("handle player one winning a second point when the game score is at 15", () => {
      const playerOne = { points: 15, games: 0, sets: 0, matchesWon: 0 };
      const playerOneScore = playerWinsPoint(playerOne);
      expect(playerOneScore.points).toEqual(30);
    });
    it("handle player one winning a third point when the game score is at 30", () => {
      const playerOne = { points: 30, games: 0, sets: 0, matchesWon: 0 };
      const playerOneScore = playerWinsPoint(playerOne);
      expect(playerOneScore.points).toEqual(40);
    });
    it("handle player one winning a advantage point when the game score is at 40", () => {
      const playerOne = { points: 40, games: 0, sets: 0, matchesWon: 0 };
      const playerOneScore = playerWinsPoint(playerOne);
      expect(playerOneScore.points).toEqual("Adv");
    });
  });
});
