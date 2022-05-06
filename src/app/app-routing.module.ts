import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiCalcComponent } from 'src/features/bmi-calc/bmi-calc.component';
import { BmrCalcComponent } from 'src/features/bmr-calc/bmr-calc.component';
import { DashboardComponent } from 'src/features/dashboard/dashboard.component';
import { TdeeCalcComponent } from 'src/features/tdee-calc/tdee-calc.component';

const routes: Routes = [
    {
        path: '',
        component:  DashboardComponent,
    },
    {
      path: 'bmi',
      component: BmiCalcComponent
    },
    {
      path: 'bmr',
      component: BmrCalcComponent
    },
    {
      path: 'tdee',
      component: TdeeCalcComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
