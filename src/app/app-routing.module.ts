import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './component/main-page/main-page.component';
import { CarersPageComponent } from './component/carers-page/carers-page.component';
import { AboutComponent } from './component/about/about.component';
import { SecurityPageComponent } from './component/security-page/security-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'carers', component: CarersPageComponent },
  { path: 'about', component: AboutComponent},
  { path: 'security', component: SecurityPageComponent},
  { path: 'login', component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
