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

  //use service constants for EventEmitter.
  loginStatus = new EventEmitter<number>();

  constructor(private authService: AuthService,private settings : SettingsService, private http: Http) { }


  doLogin(loginData: FormGroup) {
    
    const loginDataObj = loginData.value;
    console.log("in Login Service",loginDataObj);
    this.authService.doSuccesfullLogin(new Token("token data string"));
    const requestBody = JSON.stringify(loginDataObj);

    return this.http.post(this.settings.fetchFullHttpSettings()+'/login', requestBody).map((response: Response) => response.json()).subscribe((token: Token) => {
      this.authService.doSuccesfullLogin(token);
      console.log(token);
    });
  }

  doLogout(){

  }


}
