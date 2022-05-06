import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmrCalcComponent } from './bmr-calc.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { StoreModule } from '@ngrx/store';
import * as fromFeature from './state/reducer'
import { EffectsModule } from '@ngrx/effects';
import { BmrEffects } from './state/effects';


@NgModule({
  declarations: [
    BmrCalcComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    StoreModule.forFeature(fromFeature.featureName, fromFeature.reducer),
    EffectsModule.forFeature([BmrEffects])
  ]
})
export class BmrCalcModule { }
