import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';

import { formActions } from 'src/core/form/state';
import { BasicInfo } from 'src/models';
import { bmiActions } from '.';

@Injectable({
  providedIn: 'root',
})
export class BmiEffects {
  bmiCalc$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(formActions.basicInfoUpdate),
        tap((action) => this.bmiCalc(action.info))
      ),
    { dispatch: false }
  );

  public constructor(private _actions$: Actions, private _store: Store) {}

  private weightStatus(bmi: number): string {
      if (bmi <= 18.5) return "underweight"
      if (bmi > 18.5 && bmi <=25) return "healthy"
      if (bmi > 25 && bmi <= 30) return "overweight"
      if (bmi > 30) return "obese"
      return "end"
  }

  private bmiCalc(basicInfo: BasicInfo) {
    let { weight } = basicInfo;
    const { heightFeet, heightInch } = basicInfo;
    if (weight === 0 
      || heightFeet === 0 
      || heightInch === 0) {
      return;
    }
    let heightCm = 0;
    let heightM = 0;

    weight = weight / 2.2;
    heightCm = heightCm + heightFeet * 30.48 + heightInch * 2.54;
    heightM = heightCm / 100;

    let bmi = weight / Math.pow(heightM, 2);
    const bmiVal = Math.round(bmi * 10) / 10;
    const weightStatus = this.weightStatus(bmiVal)
    this._store.dispatch(
      bmiActions.bmiUpdate({
        bmi: bmiVal,
        weight: weightStatus
      })
    );
  }
}
