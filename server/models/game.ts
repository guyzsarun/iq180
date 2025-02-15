import { Option } from 'fp-ts/lib/Option';
import { Map } from 'immutable';

export interface Attempt {
    answer: any[];
    numbers: number[];
}

export interface GamePlayer {
    id: string;
    score: number;
    attempt: Option<Attempt>;
    reset: boolean;
}

export type GamePlayerMap = Map<string, GamePlayer>;

export const enum GAME_STATUS {
    WAITING = 'WAITING',
    PLAYING = 'PLAYING',
}

export interface Game {
    ready: boolean;
    status: GAME_STATUS;
    players: GamePlayerMap;
}
