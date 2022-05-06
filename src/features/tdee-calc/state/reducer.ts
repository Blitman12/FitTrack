import { createReducer, on, Action } from "@ngrx/store";
import { tdeeActions } from ".";


export const featureName = 'tdeeSlice';

export interface TdeeState {
    tdeeInfo: number
}

export const initialState: TdeeState = {
    tdeeInfo: 0
}

const tdeeReducer = createReducer(
    initialState,
    on(tdeeActions.tdeeUpdate, (state, {tdee}) => ({
        ...state,
        tdeeInfo: tdee
    })),
    on(tdeeActions.resetTdee, () => ({
        ...initialState
    }))
)

export function reducer(state: TdeeState, action: Action): TdeeState {
    return tdeeReducer(state, action)
}