import { createAction, props } from "@ngrx/store";

export const bmiUpdate = createAction('[BMI] Update BMI', props<{bmi: number}>())

export const resetBmi = createAction('[BMI] Reset BMI')