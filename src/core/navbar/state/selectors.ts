import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import * as fromReducer from './reducer';

const getNavState = createFeatureSelector<fromReducer.NavState>(fromReducer.featureName);

const getNavVisibility = createSelector(getNavState, state => state.isVisible);

const getPageName = createSelector(getNavState, state => state.pageName);

@Injectable({
    providedIn: 'root'
})
export class NavSelectors {
    public isVisible$ = this._store.select(getNavVisibility);
    public pageName$ = this._store.select(getPageName)
    public constructor(private _store: Store){}
}
