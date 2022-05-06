import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { StoreModule } from '@ngrx/store';
import * as fromFeature from './state/reducer'
import { EffectsModule } from '@ngrx/effects';
import { NavEffects } from './state/effects';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


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
