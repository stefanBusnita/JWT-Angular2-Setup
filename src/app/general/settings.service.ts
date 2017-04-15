import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  protocol: string = "http://";
  context : string = "/jwt"
  domain : string = "localhost:"
  port: string = "8080";

  constructor() { }

  fetchProtocol() {
    return this.protocol;
  }

  fethPort() {
    return this.port;
  }
  
  fetchContext(){
    return this.context;
  }

  fetchFullHttpSettings(){
    return this.protocol+this.domain+this.port+this.context;
  }

}
