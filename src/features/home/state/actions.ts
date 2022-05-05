import { createAction, props } from "@ngrx/store";
import { BasicInfo } from "src/models";

export const basicInfoUpdate = createAction('[APP] Basic Info Updated', props<{info: BasicInfo}>());

export const resetBasicInfo = createAction('[APP] Reset Basic Info')