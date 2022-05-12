import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RouterNavigationAction, ROUTER_NAVIGATED } from "@ngrx/router-store";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { tap } from "rxjs";

import { NavActions } from ".";

@Injectable({
    providedIn: 'root'
})
export class NavEffects {
    public constructor(
        private _store: Store,
        private _actions$: Actions
        ) {}

    onNav$ = createEffect(() => this._actions$.pipe(
        ofType(ROUTER_NAVIGATED),
        tap((action: RouterNavigationAction) => this.changeVisibility(action))
    ), { dispatch: false })

    private changeVisibility(action: RouterNavigationAction) {
        const isVisible = action.payload.event.url !== '/'
        this._store.dispatch(NavActions.visibilityChanged({ isVisible }))
    }
}
