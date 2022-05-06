import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmiCalcRoutingModule } from './bmi-calc-routing.module';
import { BmiCalcComponent } from './bmi-calc.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromFeature from './state/reducer';
import { EffectsModule } from '@ngrx/effects';
import { BmiEffects } from './state/effects';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    BmiCalcComponent
  ],
  imports: [
    CommonModule,
    BmiCalcRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromFeature.featureName, fromFeature.reducer),
    EffectsModule.forFeature([BmiEffects]),
    MatInputModule,
    MatIconModule
  ]
})
export class BmiCalcModule { }
