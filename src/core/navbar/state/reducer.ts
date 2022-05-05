import { Action, createReducer, on } from '@ngrx/store';
import { NavActions } from '.';

export const featureName = 'navSlice';

export interface NavState {
    isVisible: boolean;
}

export const initialState: NavState = {
  isVisible: false,
};

const navReducer = createReducer(
  initialState,
  on(NavActions.visibilityChanged, (state, { isVisible }) => ({
    ...state,
    isVisible
  }))
);

export function reducer(state: NavState, action: Action): NavState {
    return navReducer(state, action)
}