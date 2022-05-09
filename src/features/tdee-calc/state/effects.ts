import { Injectable } from "@angular/core";
import {  Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { concatMap, debounceTime, of, tap, withLatestFrom } from "rxjs";
import { formActions } from "src/core/form/state";
import { BasicInfo, TdeeInfo } from "src/models";
import { tdeeActions } from ".";
import {BmrSelectors} from '../../bmr-calc/state/selectors'


@Injectable({
    providedIn: 'root'
})
export class TdeeEffects {
    tdeeCalc$ = createEffect(
        () => 
        this._actions$.pipe(
            ofType(formActions.basicInfoUpdate),
            debounceTime(0),
            concatMap((action) => of(action).pipe(
                withLatestFrom(this._bmrSelector.bmrInfo$)
            )),
            tap(([action, bmrInfo]) => this.tdeeCalc(action.info, bmrInfo))
        ),
        {dispatch: false}
    )


    constructor(private _store: Store, private _actions$: Actions, private _bmrSelector: BmrSelectors) {}

    tdeeCalc(basicInfo: BasicInfo, _bmrInfo: number) {
        const {activityLevel} = basicInfo;
        if (_bmrInfo === 0) {
            return
        }
        let tdee = 0;
        switch(activityLevel) {
            case '1':
                tdee = 1.2 * _bmrInfo
                break;
            case '2':
                tdee = 1.375 * _bmrInfo
                break;
            case '3':
                tdee = 1.55 * _bmrInfo
                break;
            case '4':
                tdee = 1.725 * _bmrInfo
                break;
            case '5':
                tdee = 1.9 * _bmrInfo
                break;
            default:
                console.error('An error occured')
        }
        tdee = Math.round(tdee);
        const muscleGain = tdee + 200;
        const fatLoss = Math.round(tdee - (tdee * 0.2));
        this._store.dispatch(tdeeActions.tdeeUpdate({tdee: {muscleGain: muscleGain, fatLoss: fatLoss, tdee: tdee}}));
    }
}