import { OAuthService } from './../../providers/o-auth/o-auth';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public oAuth: OAuthService,
  ) {}

  login() {
    this.oAuth.login();
  }

}
