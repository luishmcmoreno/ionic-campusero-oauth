import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CPOauth } from './cpoauth';
import { Oauth } from 'ng2-cordova-oauth/oauth';

/*
  Generated class for the OAuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OAuthService {

  static readonly CLIENT_ID: string = 'XXX';

  constructor(
    public http: HttpClient,
    public oauth: Oauth,
  ) {}

  login() {
    const provider = new CPOauth({
      clientId: OAuthService.CLIENT_ID,
    });
    
    this.oauth.logInVia(provider).then((success: any) => {
      console.log(success);
      const url = 'XXX';
      this.http.post(url, success).toPromise().then((success) => {
        console.log(success);
      }).catch(e => {
        console.log(e);
      });
    }).catch((err) => {
      console.log(err);
    });
  }

}
