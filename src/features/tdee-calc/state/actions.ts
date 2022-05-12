import { createAction, props } from "@ngrx/store";

import { TdeeInfo } from "src/models";

export const tdeeUpdate = createAction('[TDEE] Update Tdee', props<{tdee: TdeeInfo}>());

export const resetTdee = createAction('[TDEE] Reset');
