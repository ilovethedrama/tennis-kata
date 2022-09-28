type Set = 0 | 1 | 2 | 3;

export type Game = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type Point = 0 | 15 | 30 | 40 | "Advantage" | "-";

export type Player = 1 | 2;

export interface GameState {
  sets: [Set, Set];
  games: [Game, Game];
  points: [Point, Point];
}

export interface PointsState {
  points: [Point, Point];
}
