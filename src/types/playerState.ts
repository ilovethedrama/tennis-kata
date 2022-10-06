export interface playerState {
    points: points;
    games: number;
    sets: number;
    matchesWon: number;
}

export type points = 0  | 15 | 30 | 40 | 'Adv' | '-'