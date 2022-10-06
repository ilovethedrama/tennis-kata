export interface playerState {
    points: points;
    games: number;
    sets: number;
    matchesWon: number;
    name: string;
}
export interface gameState {
    playerOne: playerState;
    playerTwo: playerState;
}

export type points = 0  | 15 | 30 | 40 | 'Adv' | '-';

export type players = "Player One" | "Player Two";