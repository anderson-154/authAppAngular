import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth/layouts/auth-layout/auth-layout.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';

const routes: Routes = [

  {
    path:'auth',
    //guards
    loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule),
  },
  {
    path:'dashboard',
    canActivate:[isAuthenticatedGuard],
    loadChildren:()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule),
  },
  {
    path:'**',
    redirectTo:'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
