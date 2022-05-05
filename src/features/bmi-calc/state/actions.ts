import { createAction, props } from "@ngrx/store";
import { BmiInfo } from "src/models";

export const bmiUpdate = createAction('[BMI] Update BMI', props<{bmi: BmiInfo}>())

export const resetBmi = createAction('[BMI] Reset BMI')