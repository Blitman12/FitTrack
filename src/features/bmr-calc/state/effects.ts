import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { formActions } from 'src/core/form/state';
import { BasicInfo, GenderType } from 'src/models';
import { bmrActions } from '.';

@Injectable({
  providedIn: 'root',
})
export class BmrEffects {
  bmrCalc$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(formActions.basicInfoUpdate),
        tap((action) => this.bmrCalc(action.info))
      ),
    { dispatch: false }
  );

  constructor(private _actions$: Actions, private _store: Store) {}

  bmrCalc(basicInfo: BasicInfo) {
    let {weight, heightFeet, heightInch} = basicInfo;
    const {age, gender} = basicInfo
    if (weight === 0 
      || heightFeet === 0
      || heightInch === 0
      || age === 0) {
      return;
    }
    weight = weight / 2.2;
    heightFeet = heightFeet * 30.48;
    heightInch = basicInfo.heightInch * 2.54;
    const heightInCm = heightFeet + heightInch;
    const genderModifier = gender === GenderType.Male ? 5 : -16
    let bmrVal = 10 * weight + 6.25 * heightInCm - 5 * age + genderModifier;
    bmrVal = Math.round(bmrVal);
    this._store.dispatch(bmrActions.bmrUpdate({ bmr: bmrVal }));
  }
}
