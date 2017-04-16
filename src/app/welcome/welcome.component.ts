import { AuthService } from './../general/auth.service';
import { PermissionsTstService } from './../resources/permissions-tst.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  authDetails: any;

  constructor(private permissionsTestService: PermissionsTstService, private authService: AuthService) { }

  ngOnInit() {

    this.permissionsTestService.getPermissionTest(1).subscribe((response: any) => {
      console.log("YOU CAN ACCESS THE USER RESOURCE",response);
    });

    this.authDetails = this.authService.doGetAuthDetails();
  }

  getUserData() {

  }

  getGuestData() {

  }

  getAdminData() {

  }

}
