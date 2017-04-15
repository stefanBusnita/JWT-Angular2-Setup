import { Token } from './token';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  tokenData : Token;

  constructor(private http : Http) { }
  

  storeToken(tokenData : Token){
    this.tokenData = tokenData;
  }

  deleteToken(tokenData : Token){
    delete this.tokenData;
  }
  
  getToken(){
    return this.tokenData;
  }

}
