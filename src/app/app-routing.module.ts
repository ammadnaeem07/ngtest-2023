import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './init/auth.guard';
import { LoginComponent } from './login/login.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full'
  }, 
  { 
    path: 'login', 
    component: LoginComponent,
  }, 
  { 
    path: 'register', 
    component: RegisterComponent,
  }, 
  { 
    path: 'pieChart', 
    component: PieChartComponent,
    canActivate:[AuthGuard]
  }, 
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate:[AuthGuard]
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
