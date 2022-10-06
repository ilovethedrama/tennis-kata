import { render, screen } from "@testing-library/react";
import { playerWinsPoint } from "../helpers/helpers-v2";
import { playerState } from "../types/playerState";

describe("Tennis game", () => {
  describe("Player One", () => {
    it("handle player one winning a point when the game starts at 0-0", () => {
      const playerOne: playerState = { points: 0, games: 0, sets: 0, matchesWon:0 , name: "Player One" };
      const playerTwo: playerState = { points: 0, games: 0, sets: 0, matchesWon: 0, name: "Player Two" };
      const game = { playerOne, playerTwo}
      const gameScore = playerWinsPoint(game, "Player One");
      expect(gameScore.points).toEqual(15);
    });
    it("handle player one winning a second point when the game score is 15-0", () => {
      const playerOne: playerState = { points: 15, games: 0, sets: 0, matchesWon: 0, name: "Player One" };
      const playerTwo: playerState = { points: 0, games: 0, sets: 0, matchesWon: 0, name: "Player Two" };
      const game = { playerOne, playerTwo}
      const gameScore = playerWinsPoint(game, "Player One");
      expect(gameScore.points).toEqual(30);
    });
    it("handle player one winning a third point when the game score 30-0", () => {
      const playerOne: playerState = { points: 30, games: 0, sets: 0, matchesWon:0 , name: "Player One" };
      const playerTwo: playerState = { points: 0, games: 0, sets: 0, matchesWon: 0, name: "Player Two" };
      const game = { playerOne, playerTwo}
      const gameScore = playerWinsPoint(game, "Player One");
      expect(gameScore.points).toEqual(40);
    });
    it("handle player one winning game when the score is 40-0", () => {
      const playerOne: playerState = { points: 40, games: 0, sets: 0, matchesWon: 0, name: "Player One"};
      const playerTwo: playerState = { points: 0, games: 0, sets: 0, matchesWon: 0, name: "Player Two" };
      const game = { playerOne, playerTwo}
      const gameScore = playerWinsPoint(game, "Player One");
      expect(gameScore.points).toEqual(0);
    });
    it("handle player one winning a advantage point when the game score at -", () => {
      const playerOne: playerState = { points: '-', games: 0, sets: 0, matchesWon: 0, name: "Player One"};
      const playerTwo: playerState = { points: 0, games: 0, sets: 0, matchesWon: 0, name: "Player Two" };
      const game = { playerOne, playerTwo}
      const gameScore = playerWinsPoint(game, "Player One");
      expect(gameScore.points).toEqual("Adv");
    });
  });
});
