import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BmiCalcModule } from 'src/features/bmi-calc/bmi-calc.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BmrCalcModule } from 'src/features/bmr-calc/bmr-calc.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { NavbarModule } from 'src/core/navbar/navbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormModule } from 'src/core/form/form.module';
import { DashboardModule } from 'src/features/dashboard/dashboard.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BmiCalcModule,
    BmrCalcModule,
    DashboardModule,
    FormModule,
    ReactiveFormsModule,
    NavbarModule,
    StoreModule.forRoot(
      {
        'app-router': routerReducer
      }, 
      {
        metaReducers: [],
        runtimeChecks: {}
      }
    ),
    EffectsModule.forRoot(),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
