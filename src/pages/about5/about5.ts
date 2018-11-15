import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { About6Page } from '../about6/about6';
@IonicPage()
@Component({
  selector: 'page-about5',
  templateUrl: 'about5.html',
})
export class About5Page {
  PhuketFantacy = About6Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  Gopage6(){
    this.navCtrl.push(this.PhuketFantacy)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad About2Page');
  }

}
