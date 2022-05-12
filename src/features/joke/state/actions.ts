import { createAction, props } from "@ngrx/store";
import { Joke } from "src/models";


export const jokeLoaded = createAction('[JOKE] joke loaded', props<{joke: Joke}>());
