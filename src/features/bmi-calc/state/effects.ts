import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { tap } from "rxjs";
import { appActions } from "src/features/home/state";
import { BasicInfo } from "src/models";
import { bmiActions } from ".";

@Injectable({
    providedIn: 'root'
})
export class BmiEffects {
    bmiCalc$ = createEffect(() => this._actions$.pipe(
        ofType(appActions.basicInfoUpdate),
        tap(action => this.bmiCalc(action.info))
    ), {dispatch: false})

    constructor(
        private _actions$: Actions,
        private _store: Store
        ){}

    bmiCalc(basicInfo: BasicInfo) {
        let weight = basicInfo.weight
        let heightFt = basicInfo.heightFeet
        let heightIn = basicInfo.heightInch
        let heightCm = 0
        let heightM = 0
        
        if (weight === 0 || heightFt === 0 || heightIn === 0) {
            return
        }

        weight = weight / 2.2
        heightCm = heightCm + (heightFt * 30.48) + (heightIn * 2.54)
        heightM = heightCm / 100
    
        let bmi = weight / (Math.pow(heightM, 2))
        const bmiVal = Math.round(bmi * 10 )/10
        this._store.dispatch(bmiActions.bmiUpdate({bmi: {
            bmi: bmiVal
        }}))
      }
}