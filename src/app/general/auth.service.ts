import { Observable, Subject } from 'rxjs/Rx';
import { TokenService } from './../token/token.service';
import { Token } from './../token/token';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private tokenService: TokenService, private router: Router) { }


  doSuccesfullLogin(tokenData: Token) {
    this.tokenService.storeToken(tokenData);
    this.router.navigate(['/welcome']);
  }

  doLogout() {

  }

  isAuthenticated() : boolean{
    return this.tokenService.getToken() ? true : false;
  }

}
