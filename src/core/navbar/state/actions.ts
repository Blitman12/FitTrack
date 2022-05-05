import { createAction, props } from "@ngrx/store";

export const visibilityChanged = createAction('[NAVBAR] Home Visbility Changed', props<{isVisible: boolean}>())


