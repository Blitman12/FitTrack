import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import * as fromReducer from './reducer';

const getJokeState = createFeatureSelector<fromReducer.JokeState>(
  fromReducer.featureName
);

export const getJokeInfo = createSelector(getJokeState, (state) => state.joke);

@Injectable({
  providedIn: 'root',
})
export class JokeSelectors {
  public jokeInfo$ = this._store.select(getJokeInfo);
  constructor(private _store: Store<fromReducer.JokeState>) {}
}
