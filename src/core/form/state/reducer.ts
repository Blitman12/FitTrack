import { Action, createReducer, on } from "@ngrx/store";
import { BasicInfo } from "src/models";
import { formActions } from ".";

export const featureName = 'basicInfoSlice';

export interface FormState {
    basicInfo: BasicInfo;
}

export const initialState: FormState = {
    basicInfo: new BasicInfo()
}

const appReducer = createReducer(
    initialState,
    on(formActions.basicInfoUpdate, (state, {info}) => ({
        ...state,
        basicInfo: info
    })),
    on(formActions.resetBasicInfo, () => ({
        ...initialState
    }))
)

export function reducer(state: FormState, action: Action): FormState {
    return appReducer(state, action)
}