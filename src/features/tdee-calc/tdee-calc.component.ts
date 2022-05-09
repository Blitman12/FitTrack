import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TdeeInfo } from 'src/models';
import { TdeeSelectors } from './state/selectors';

@Component({
  selector: 'app-tdee-calc',
  templateUrl: './tdee-calc.component.html',
  styleUrls: ['./tdee-calc.component.scss']
})
export class TdeeCalcComponent implements OnInit {
  public tdeeInfo: TdeeInfo = {
    tdee: 0,
    muscleGain: 0,
    fatLoss: 0
  };

  constructor(private _store: Store, private _tdeeSelector: TdeeSelectors) { 
    this._tdeeSelector.tdeeInfo$.subscribe(tdee => this.tdeeInfo = tdee)
   }  

  ngOnInit(): void {
  }

}
