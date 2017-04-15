import { LoginService } from './login/login.service';
import { SettingsService } from './general/settings.service';
import { TokenService } from './token/token.service';
import { AuthService } from './general/auth.service';
import { LoggedService } from './general/logged.service';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home.component';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    HttpModule,
    routing
  ],
  providers: [LoggedService,AuthService,TokenService,LoginService,SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
