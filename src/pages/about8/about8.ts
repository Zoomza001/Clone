import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { About9Page } from '../about9/about9';

/**
 * Generated class for the About8Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about8',
  templateUrl: 'about8.html',
})
export class About8Page {
  BangteelunggaPage = About9Page

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  Gopage9(){
    this.navCtrl.push(this.BangteelunggaPage)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad About8Page');
  }

}
