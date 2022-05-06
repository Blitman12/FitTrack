import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BmiSelectors } from './state/selectors';

@Component({
  selector: 'app-bmi-calc',
  templateUrl: './bmi-calc.component.html',
  styleUrls: ['./bmi-calc.component.scss']
})

export class BmiCalcComponent implements OnInit {
  public bmiVal: number = 0;

  constructor(
    private _store: Store,
    private _bmiSelectors: BmiSelectors
    ) { 
      this._bmiSelectors.bmiInfo$.subscribe(bmi => this.bmiVal = bmi)
    }


  ngOnInit(): void {
  }

}
