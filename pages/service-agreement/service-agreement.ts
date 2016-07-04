import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main-page/main-page';

/*
  Generated class for the ServiceAgreementPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/service-agreement/service-agreement.html',
})
export class ServiceAgreementPage {
  constructor(private nav: NavController) {
    this.nav = nav;
  }

  toMain() {
    this.nav.push(MainPage);
  }
}
