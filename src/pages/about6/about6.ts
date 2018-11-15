import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { About7Page } from '../about7/about7';

/**
 * Generated class for the About6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about6',
  templateUrl: 'about6.html',
})
export class About6Page {

Phaphuttamongkon = About7Page;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  Gopage7(){
this.navCtrl.push(this.Phaphuttamongkon)


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad About6Page');
  }

}
