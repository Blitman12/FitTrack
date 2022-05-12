import { createAction, props } from "@ngrx/store";

import { PageName } from "src/models";

export const visibilityChanged = createAction('[NAVBAR] Home Visbility Changed', props<{isVisible: boolean}>());

export const pageNameChanged = createAction('[NAVBAR] Page Name Changed', props<{pageName: PageName}>());
