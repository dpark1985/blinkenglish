import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { ChallegePage } from '../challege/challege';
import { MainPage } from '../main-page/main-page';

/*
  Generated class for the StageOnePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/stage-one/stage-one.html',
})
export class StageOnePage {
  static get parameters() {
    return [[NavController]];
  }
  @ViewChild('mySlider') slider: Slides;
  constructor(private nav: NavController) {}

  wordList = [
    {msg: 'test1', ko: '한글1'},
    {msg: 'test2', ko: '한글2'},
    {msg: 'test3', ko: '한글3'},
    {msg: 'test4', ko: '한글4'},
    {msg: 'test5', ko: '한글5'},
    {msg: 'test6', ko: '한글6'},
    {msg: 'test7', ko: '한글7'},
    {msg: 'test8', ko: '한글8'},
    {msg: 'test9', ko: '한글9'},
    {msg: 'test10', ko: '한글10'}
  ]

  mySlideOptions = {
    initialSlide: 0,
    onlyExternal: true,
    autoplay: 1000,
    autoplayStopOnLast: true
  };

  toChallenge() {
    this.nav.push(ChallegePage, {"userParams": this.wordList});
  }

  toMain() {
    this.nav.push(MainPage);
  }

}
