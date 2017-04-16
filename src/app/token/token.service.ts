import { Token } from './token';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  tokenData: Token;

  constructor(private http: Http) { }


  storeToken(tokenData: Token) {
    this.tokenData = tokenData;
  }

  deleteToken(tokenData: Token) {
    delete this.tokenData;
  }

  getTokenData() {
    return this.tokenData;
  }

  getJwtAuthorizationHeader(par: URLSearchParams = new URLSearchParams()) {
    const token: string = this.tokenData.token;

    if (token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + token });
      return new RequestOptions({ headers: headers, search: par });
    }
    else {
      console.log("THROWING");
      throw "Missing authorization token";
    }
  }

}
