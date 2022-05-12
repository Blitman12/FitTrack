import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { BmiCalcComponent } from 'src/features/bmi-calc/bmi-calc.component';
import { BmrCalcComponent } from 'src/features/bmr-calc/bmr-calc.component';
import { DashboardComponent } from 'src/features/dashboard/dashboard.component';
import { JokeResolver } from 'src/features/joke/gaurds/joke.resolver';
import { JokeComponent } from 'src/features/joke/joke.component';
import { TdeeCalcComponent } from 'src/features/tdee-calc/tdee-calc.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'bmi',
    component: BmiCalcComponent,
  },
  {
    path: 'bmr',
    component: BmrCalcComponent,
  },
  {
    path: 'tdee',
    component: TdeeCalcComponent,
  },
  {
    path: 'joke',
    component: JokeComponent,
    canActivate: [JokeResolver]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
  exports: [RouterModule],
  declarations: [],
  providers: [JokeResolver]
})
export class AppRoutingModule {}
