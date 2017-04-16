import { ProfileService } from './../resources/profile.service';
import { Observable, Subject } from 'rxjs/Rx';
import { TokenService } from './../token/token.service';
import { Token } from './../token/token';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private authDetails : any;

  constructor(private tokenService: TokenService,private profileService :  ProfileService, private router: Router) { }


  doSuccesfullLogin(tokenData: Token) {
    this.tokenService.storeToken(tokenData);
    this.doProfile();
    
  }

  private doProfile(){
      this.profileService.getProfile().subscribe((response : any)=>{
          this.authDetails = response;
          this.router.navigate(['/welcome']);
      })
  }

  doGetAuthDetails(){
    return this.authDetails;
  }

  doLogout() {

  }

  isAuthenticated() : boolean{
    return this.tokenService.getTokenData() ? true : false;
  }

}
