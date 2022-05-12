import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import * as fromReducer from './state/reducer'
import { TdeeEffects } from './state/effects';
import { TdeeCalcComponent } from './tdee-calc.component';

@NgModule({
  declarations: [
    TdeeCalcComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    EffectsModule.forFeature([TdeeEffects]),
    StoreModule.forFeature(fromReducer.featureName, fromReducer.reducer)
  ]
})
export class TdeeCalcModule { }
