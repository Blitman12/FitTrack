import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EffectsModule } from '@ngrx/effects';

import * as fromFeature from './state/reducer'
import { NavEffects } from './state/effects';
import { NavbarComponent } from './navbar.component';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromFeature.featureName, fromFeature.reducer),
    EffectsModule.forFeature([NavEffects]),
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
