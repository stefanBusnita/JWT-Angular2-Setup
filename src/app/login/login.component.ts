import { LoginService } from './login.service';
import { Token } from './../token/token';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService : LoginService) { }

  ngOnInit() {
    this.initForm();
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginService.doLogin(this.loginForm);
    }else{
      //show validation messages in interface
    }
  }

  private initForm() {
    let username = '';
    let password = '';

    this.loginForm = this.formBuilder.group({
      username: [username, [Validators.required]],
      password: [password, [Validators.required]]
    });

  }

}
