import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BmiCalcRoutingModule } from './bmi-calc-routing.module';
import { BmiCalcComponent } from './bmi-calc.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BmiCalcComponent
  ],
  imports: [
    CommonModule,
    BmiCalcRoutingModule,
    ReactiveFormsModule
  ]
})
export class BmiCalcModule { }
