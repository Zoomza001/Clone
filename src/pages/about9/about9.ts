import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { About10Page } from '../about10/about10';

/**
 * Generated class for the About9Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about9',
  templateUrl: 'about9.html',
})
export class About9Page {
  PhuketSimonPage =About10Page

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  Gopage10(){
    this.navCtrl.push(this.PhuketSimonPage)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad About9Page');
  }

}
