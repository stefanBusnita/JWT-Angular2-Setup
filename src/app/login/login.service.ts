import { TokenService } from './../token/token.service';
import { SettingsService } from './../general/settings.service';
import { Token } from './../token/token';
import { FormGroup } from '@angular/forms';
import { Headers, Http, Response } from '@angular/http';
import { AuthService } from './../general/auth.service';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { Observable, Subscription } from 'rxjs/Rx';

@Injectable()
export class LoginService {

  private loginAccess : string = '/login';

  //use service constants for EventEmitter.
  loginStatus = new EventEmitter<number>();

  constructor(private authService: AuthService,private settings : SettingsService, private http: Http, private CHANGE : TokenService) { }


  doLogin(loginData: FormGroup) {
    
    const loginDataObj = loginData.value;
    const requestBody = JSON.stringify(loginDataObj);

    return this.http.post(this.settings.fetchFullHttpSettings()+this.loginAccess, requestBody).map((response: Response) => response.json()).subscribe((token: Token) => {
      this.authService.doSuccesfullLogin(token);
    });
  }

  doLogout(){

  }


}
