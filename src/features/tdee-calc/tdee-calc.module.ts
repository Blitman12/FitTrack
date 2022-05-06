import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdeeCalcComponent } from './tdee-calc.component';
import {MatIconModule} from '@angular/material/icon';
import { EffectsModule } from '@ngrx/effects';
import * as fromReducer from './state/reducer'
import { StoreModule } from '@ngrx/store';
import { TdeeEffects } from './state/effects';

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
