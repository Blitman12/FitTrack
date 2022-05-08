import { Action, createReducer, on } from "@ngrx/store";
import { bmiActions } from ".";

export const featureName = 'bmiSlice';

export interface BmiState {
    bmiInfo: number;
    weightStatus:  string;
}

export const initialState: BmiState = {
    bmiInfo: 0,
    weightStatus: 'underweight'
}

const bmiReducer = createReducer(
    initialState,
    on(bmiActions.bmiUpdate, (state, {bmi, weight}) => ({
        ...state,
        bmiInfo: bmi,
        weightStatus: weight
    })),
    on(bmiActions.resetBmi, () => ({
        ...initialState
    }))
)



export function reducer(state: BmiState, action: Action): BmiState {
    return bmiReducer(state, action)
}