import { TokenService } from './../token/token.service';
import { SettingsService } from './../general/settings.service';
import { Http, Response,URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PermissionsTstService {

  private permissionsAccess = '/rest/permissions-data/';

  constructor(private http : Http,private settings : SettingsService,private tokenService : TokenService) { }

  getPermissionTest(type : number){
    let params: URLSearchParams = new URLSearchParams();
    params.set('type',type.toString());
    return this.http.get(this.settings.fetchFullHttpSettings()+this.permissionsAccess,this.tokenService.getJwtAuthorizationHeader(params)).map((response: Response) => response.json());
  }



}
