import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HowToPage } from '../how-to/how-to';
import { StageOnePage } from '../stage-one/stage-one';

/*
  Generated class for the MainPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/main-page/main-page.html',
})
export class MainPage {
  constructor(private nav: NavController) {}


  toHowToPage() {
    this.nav.push(HowToPage);
  }

  toStage1() {
    this.nav.push(StageOnePage);
  }
}
