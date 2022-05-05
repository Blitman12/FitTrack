import { Action, createReducer, on } from "@ngrx/store";
import { BmiInfo } from "src/models";
import { bmiActions } from ".";

export const featureName = 'bmiSlice';

export interface BmiState {
    bmiInfo: BmiInfo;
}

export const initialState: BmiState = {
    bmiInfo: {
        bmi: 0
    }
}

const bmiReducer = createReducer(
    initialState,
    on(bmiActions.bmiUpdate, (state, {bmi}) => ({
        ...state,
        bmiInfo: bmi
    })),
    on(bmiActions.resetBmi, () => ({
        ...initialState
    }))
)



export function reducer(state: BmiState, action: Action): BmiState {
    return bmiReducer(state, action)
}