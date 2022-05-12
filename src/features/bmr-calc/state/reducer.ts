import { Action, createReducer, on } from '@ngrx/store';

import { bmiActions } from 'src/features/bmi-calc/state';
import { bmrActions } from '.';

export const featureName = 'bmrSlice';

export interface BmrState {
    bmrInfo: number
};

export const initialState: BmrState = {
    bmrInfo: 0
};

const bmrReducer = createReducer(
    initialState,
    on(bmrActions.bmrUpdate, (state, {bmr}) => ({
        ...state,
        bmrInfo: bmr
    })),
    on(bmiActions.resetBmi, () => ({
        ...initialState
    }))
)

export function reducer(state: BmrState, action: Action): BmrState {
    return bmrReducer(state, action)
}
