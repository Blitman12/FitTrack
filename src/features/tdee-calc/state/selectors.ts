import { Injectable } from "@angular/core";
import { createFeatureSelector, createSelector, Store } from "@ngrx/store";
import * as fromReducer from './reducer'

const getTdeeState = createFeatureSelector<fromReducer.TdeeState>(fromReducer.featureName);

export const getTdeeInfo = createSelector(getTdeeState, state => state.tdeeInfo);

@Injectable({
    providedIn: 'root'
})
export class TdeeSelectors {
    public tdeeInfo$ = this._store.select(getTdeeInfo)
    constructor(private _store: Store<fromReducer.TdeeState>) {}
}