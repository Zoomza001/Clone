import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { About4Page} from'../about4/about4';
@IonicPage()
@Component({
  selector: 'page-about3',
  templateUrl: 'about3.html',
})
export class About3Page {
  WatPhaThong = About4Page;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  Gopage4(){
    this.navCtrl.push(this.WatPhaThong);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad About4Page');
  }

}
