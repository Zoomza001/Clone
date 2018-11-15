import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { About5Page } from '../about5/about5';

@IonicPage()
@Component({
  selector: 'page-about4',
  templateUrl: 'about4.html',
})
export class About4Page {
  PhuketFantacy = About5Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  Gopage5(){
    this.navCtrl.push(this.PhuketFantacy)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad About5Page');
  }

}