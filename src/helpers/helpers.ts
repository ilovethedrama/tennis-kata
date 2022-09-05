import { useState, useCallback } from "react";

export function winPoint(currentPoints: number) {
  switch (currentPoints) {
    case 0:
      return "Love";
    case 1:
      return "15";
    case 2:
      return "30";
    case 3:
      return "40";
    case 4:
      return "Game";
  }
  return "Advantage";
}

export function serveBall(serve: string) {
  switch (serve) {
    case "Ace":
    case "Immediate Point":
      return "point";
    case "Fault":
    case "Let":
      return "serveAgain";
  }
  return "play";
}

export function hitBall(hit: string) {
  switch (hit) {
    case "Didn't Reach":
    case "Out":
      return "loose point";
    case "Smesh ball":
    case "Dink ball":
      return "point";
  }
  return "back to opponent";
}

export function willOfTheTennisGods(tennisOptions: Array<string>) {
  const randomOutcome = Math.floor(Math.random() * tennisOptions.length);
  return tennisOptions[randomOutcome];
}

export function play(action: string) {
  switch (action) {
    case "back to opponent":
    case "play":
    case "serveAgain":
    case "loose point":
      return false;
  }
  return true;
}

export function takeTurn(
  serveType: typeof serveBall | typeof hitBall,
  gameplayOption: string
) {
  let addPointForServingPlayer = play(serveType(gameplayOption));
  return addPointForServingPlayer;
}
