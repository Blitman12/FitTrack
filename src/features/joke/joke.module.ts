import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { JokeComponent } from './joke.component';
import * as fromFeature from './state/reducer'



@NgModule({
  declarations: [
    JokeComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromFeature.featureName, fromFeature.reducer),
  ]
})
export class JokeModule { }
