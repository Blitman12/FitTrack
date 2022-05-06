import { createAction, props } from "@ngrx/store";

export const tdeeUpdate = createAction('[TDEE] Update Tdee', props<{tdee: number}>());

export const resetTdee = createAction('[TDEE] Reset');