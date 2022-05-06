import {createAction, props} from "@ngrx/store";

export const bmrUpdate = createAction('[BMR] Update', props<{bmr: number}>());

export const bmrReset = createAction('[BMR] Reset');