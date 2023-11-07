import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { FooterComponent } from './component/footer/footer.component';
import { CarersPageComponent } from './component/carers-page/carers-page.component';
import { AboutComponent } from './component/about/about.component';
import { SecurityPageComponent } from './component/security-page/security-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    FooterComponent,
    CarersPageComponent,
    AboutComponent,
    SecurityPageComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
