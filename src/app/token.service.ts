import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  constructor(private http : Http) { }

}
