import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { About2Page } from '../about2/about2';


@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  PhomthepPage = About2Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  Gopage2(){
    this.navCtrl.push(this.PhomthepPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad About2Page');
  }

}
