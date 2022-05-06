import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromFeature from './state/reducer';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'
import {MatSelectModule} from '@angular/material/select';
import { FormComponent } from './form.component';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromFeature.featureName, fromFeature.reducer),
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports: [
    FormComponent
  ]
})

export class FormModule { }
