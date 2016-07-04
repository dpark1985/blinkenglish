import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { StageOnePage } from '../stage-one/stage-one';
import { MainPage } from '../main-page/main-page';

/*
  Generated class for the ChallegePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  templateUrl: 'build/pages/challege/challege.html',
})
export class ChallegePage {
  wordList;
  correct:boolean;
  wrong:boolean;
  @ViewChild('challengeSlider') slider: Slides;

  constructor(private nav: NavController, private params: NavParams) {
    this.wordList = this.params.get('userParams');
  }

  challengeSlideOptions = {
    initialSlide: 0,
    onlyExternal: true,
  };

  isCorrect() {
    this.correct = true;
    setTimeout(()=>{
        this.slider.slideNext(300, false);
        this.correct = false;
    }, 500);


  }

  isWrong() {
    this.wrong = true;
    setTimeout(()=>{
        this.nav.push(StageOnePage);
        this.wrong = false;
    }, 500);
  }

  toMain() {
    this.nav.push(MainPage);
  }

}
