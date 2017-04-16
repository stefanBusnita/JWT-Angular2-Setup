import { FlashService } from './general/flash.service';
import { ProfileService } from './resources/profile.service';
import { PermissionsTstService } from './resources/permissions-tst.service';
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
import { FlashComponent } from './flash/flash.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    WelcomeComponent,
    FlashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    HttpModule,
    routing
  ],
  providers: [LoggedService,FlashService, AuthService, TokenService, LoginService, SettingsService,PermissionsTstService,ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
