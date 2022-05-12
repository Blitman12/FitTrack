import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromFeature from './state/reducer';
import { BmiEffects } from './state/effects';
import { BmiCalcComponent } from './bmi-calc.component';

@NgModule({
  declarations: [
    BmiCalcComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromFeature.featureName, fromFeature.reducer),
    EffectsModule.forFeature([BmiEffects]),
    MatInputModule,
    MatIconModule
  ]
})
export class BmiCalcModule { }
