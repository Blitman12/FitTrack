import { createAction, props } from "@ngrx/store";
import { BasicInfo } from "src/models";

export const basicInfoUpdate = createAction('[FORM] Basic Info Updated', props<{info: BasicInfo}>());

export const resetBasicInfo = createAction('[FORM] Reset Basic Info')