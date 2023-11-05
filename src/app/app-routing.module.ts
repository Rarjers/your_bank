import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './component/main-page/main-page.component';
import { CarersPageComponent } from './component/carers-page/carers-page.component';
import { AboutComponent } from './component/about/about.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'carers', component: CarersPageComponent },
  { path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
