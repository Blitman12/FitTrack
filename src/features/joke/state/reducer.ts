import { Action, createReducer, on } from "@ngrx/store";
import { Joke } from "src/models";
import { jokeActions } from ".";


export const featureName = 'jokeSlice';

export interface JokeState {
    joke: Joke;
}

export const initialState: JokeState = {
    joke: new Joke()
}

const jokeReducer = createReducer(
    initialState,
    on(jokeActions.jokeLoaded, (state, {joke}) => ({
        ...state,
        joke: joke
    }))
);

export function reducer(state: JokeState, action: Action): JokeState {
    return jokeReducer(state, action);
}
