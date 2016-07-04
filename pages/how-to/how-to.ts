import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main-page/main-page';

/*
  Generated class for the HowToPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/how-to/how-to.html',
})
export class HowToPage {
  constructor(private nav: NavController) {}

  slides = [
    {
      en: 'Deliberation',
      ko: '신중함'
    }
  ];

  toMain() {
    this.nav.push(MainPage);
  }

}
