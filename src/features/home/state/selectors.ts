import { Injectable } from "@angular/core";
import { createFeatureSelector, createSelector, Store } from "@ngrx/store";
import * as fromReducer from "./reducer";


const getHomeState = createFeatureSelector<fromReducer.HomeState>(fromReducer.featureName);

export const getBasicInfo = createSelector(getHomeState, state => state.basicInfo);

@Injectable({
    providedIn: 'root'
})
export class HomeSelectors {
    public basicInfo$ = this._store.select(getBasicInfo)
    constructor(private _store: Store<fromReducer.HomeState>) {}
}