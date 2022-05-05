import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiCalcComponent } from 'src/features/bmi-calc/bmi-calc.component';
import { BmrCalcComponent } from 'src/features/bmr-calc/bmr-calc.component';
import { HomeComponent } from 'src/features/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
      path: 'bmi',
      component: BmiCalcComponent
    },
    {
      path: 'bmr',
      component: BmrCalcComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
