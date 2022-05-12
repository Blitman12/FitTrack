import { createFeatureSelector, createSelector, Store } from "@ngrx/store";
import { Injectable } from "@angular/core";

import * as fromReducer from "./reducer";

const getBmiState = createFeatureSelector<fromReducer.BmiState>(fromReducer.featureName);

export const getBmiInfo = createSelector(getBmiState, state => state);

@Injectable({
    providedIn: 'root'
})
export class BmiSelectors {
    public bmiInfo$ = this._store.select(getBmiInfo)
    public constructor(private _store: Store) {}
}
