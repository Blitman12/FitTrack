import { Component } from '@angular/core';

import { BmiSelectors } from './state/selectors';

@Component({
  selector: 'app-bmi-calc',
  templateUrl: './bmi-calc.component.html',
  styleUrls: ['./bmi-calc.component.scss'],
})
export class BmiCalcComponent {
  public bmiVal = 0;
  public weightStatus = '';

  public constructor(private _bmiSelectors: BmiSelectors) {
    this._bmiSelectors.bmiInfo$.subscribe((bmi) => (this.bmiVal = bmi.bmiInfo));
    this._bmiSelectors.bmiInfo$.subscribe(
      (bmi) => (this.weightStatus = bmi.weightStatus)
    );
  }
}
