import { Injectable } from "@angular/core";
import { createFeatureSelector, createSelector, Store } from "@ngrx/store";
import * as fromReducer from './reducer'

const getBmrState = createFeatureSelector<fromReducer.BmrState>(fromReducer.featureName);

export const getBmrInfo = createSelector(getBmrState, state => state.bmrInfo);

@Injectable({
    providedIn: 'root'
})
export class BmrSelectors {
    public bmrInfo$ = this._store.select(getBmrInfo)
    constructor(private _store: Store<fromReducer.BmrState>){}
}