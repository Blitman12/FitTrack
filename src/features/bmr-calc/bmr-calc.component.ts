import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BmrSelectors } from './state/selectors';


@Component({
  selector: 'app-bmr-calc',
  templateUrl: './bmr-calc.component.html',
  styleUrls: ['./bmr-calc.component.scss'],
})
export class BmrCalcComponent {
  public bmrVal = 0;

  constructor(
    private _store: Store,
    private _bmrSelector: BmrSelectors
    ) {
      this._bmrSelector.bmrInfo$.subscribe(bmr => this.bmrVal = bmr)
    }

}
