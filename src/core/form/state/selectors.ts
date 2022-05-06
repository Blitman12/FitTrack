import { Injectable } from "@angular/core";
import { createFeatureSelector, createSelector, Store } from "@ngrx/store";
import * as fromReducer from "./reducer";


const getHomeState = createFeatureSelector<fromReducer.FormState>(fromReducer.featureName);

export const getBasicInfo = createSelector(getHomeState, state => state.basicInfo);

@Injectable({
    providedIn: 'root'
})
export class FormSelectors {
    public basicInfo$ = this._store.select(getBasicInfo)
    constructor(private _store: Store<fromReducer.FormState>) {}
}