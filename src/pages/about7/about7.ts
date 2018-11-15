import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { About8Page } from '../about8/about8';

/**
 * Generated class for the About7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about7',
  templateUrl: 'about7.html',
})
export class About7Page {

PhaphutmingmogkonPage = About8Page

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  Gopage8(){
      this.navCtrl.push(this.PhaphutmingmogkonPage)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad About7Page');
  }

}
