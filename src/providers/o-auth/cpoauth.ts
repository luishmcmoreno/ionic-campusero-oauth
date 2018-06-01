import { OAuthProvider, IOAuthOptions } from "ng2-cordova-oauth/provider";

export interface ICPOptions extends IOAuthOptions {
}

export class CPOauth extends OAuthProvider {

  options: ICPOptions;
  protected authUrl: string = 'https://accounts.campuse.ro/o/authorize';
  protected defaults: Object = {
    responseType: 'code',
  };

  constructor(options: ICPOptions = {}) {
    super(options);
    console.log('test');
  }

}
