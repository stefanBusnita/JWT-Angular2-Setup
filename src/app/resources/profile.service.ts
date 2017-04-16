import { SettingsService } from './../general/settings.service';
import { TokenService } from './../token/token.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {

  private profileAccess: string = '/rest/me';

  constructor(private http: Http, private settings: SettingsService, private tokenService: TokenService) { }

  getProfile() {
    return this.http.get(this.settings.fetchFullHttpSettings() + this.profileAccess, this.tokenService.getJwtAuthorizationHeader()).map((response: Response) => response.json());
  }

}
