import { createReducer, on, Action } from "@ngrx/store";

import { tdeeActions } from ".";
import { TdeeInfo } from "src/models";

export const featureName = 'tdeeSlice';

export interface TdeeState{
    tdeeInfo: TdeeInfo
};

export const initialState: TdeeState = {
    tdeeInfo: new TdeeInfo()
};

const tdeeReducer = createReducer(
    initialState,
    on(tdeeActions.tdeeUpdate, (state, { tdee }) => ({
        ...state,
        tdeeInfo: {
            tdee: tdee.tdee,
            muscleGain: tdee.muscleGain,
            fatLoss: tdee.fatLoss
        }
    })),
    on(tdeeActions.resetTdee, () => ({
        ...initialState
    }))
)

export function reducer(state: TdeeState, action: Action): TdeeState {
    return tdeeReducer(state, action)
}
