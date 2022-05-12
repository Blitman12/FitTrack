import { createAction, props } from "@ngrx/store";

export const bmiUpdate = createAction('[BMI] Update BMI', props<{bmi: number, weight: string}>());

export const resetBmi = createAction('[BMI] Reset BMI');
