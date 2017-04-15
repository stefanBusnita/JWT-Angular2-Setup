import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoggedService implements CanActivate {

  constructor(private authService : AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    console.log("Printing the ActivatedRoute",route);
    console.log("Printing the Router State snapshot",state);
    console.log("Is there a token present",this.authService.isAuthenticated());

    if(this.authService.isAuthenticated()){
      return true;
    }

     this.router.navigate(['/login']);
    return false;
  }

}
