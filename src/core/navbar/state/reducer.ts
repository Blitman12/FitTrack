import { Action, createReducer, on } from '@ngrx/store';

import { PageName } from 'src/models';
import { NavActions } from '.';

export const featureName = 'navSlice';

export interface NavState {
    isVisible: boolean;
    pageName: PageName;
};

export const initialState: NavState = {
    isVisible: false,
    pageName: PageName.Dashboard
};

const navReducer = createReducer(
  initialState,
  on(NavActions.visibilityChanged, (state, { isVisible }) => ({
    ...state,
    isVisible
  })),
  on(NavActions.pageNameChanged, (state, {pageName}) => ({
    ...state,
    pageName
  }))
);

export function reducer(state: NavState, action: Action): NavState {
    return navReducer(state, action);
}
