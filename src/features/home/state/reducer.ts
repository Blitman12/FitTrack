import { Action, createReducer, on } from "@ngrx/store";
import { BasicInfo } from "src/models";
import { appActions } from ".";

export const featureName = 'basicInfoSlice';

export interface HomeState {
    basicInfo: BasicInfo;
}

export const initialState: HomeState = {
    basicInfo: {
        age: 0,
        heightFeet: 0,
        heightInch: 0,
        weight: 0
    }
}

const appReducer = createReducer(
    initialState,
    on(appActions.basicInfoUpdate, (state, {info}) => ({
        ...state,
        basicInfo: info
    })),
    on(appActions.resetBasicInfo, () => ({
        ...initialState
    }))
)

export function reducer(state: HomeState, action: Action): HomeState {
    return appReducer(state, action)
}