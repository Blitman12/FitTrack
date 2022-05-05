import { Injectable } from "@angular/core";
import { createFeatureSelector, createSelector, Store } from "@ngrx/store";
import * as fromReducer from "./reducer";

const getNavState = createFeatureSelector<fromReducer.NavState>(fromReducer.featureName);

const getNavVisibility = createSelector(getNavState, state => state.isVisible);

@Injectable({
    providedIn: 'root'
})
export class NavSelectors {
    public isVisible$ = this._store.select(getNavVisibility)
    constructor(private _store: Store){}
}