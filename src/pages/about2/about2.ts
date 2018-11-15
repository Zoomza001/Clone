import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { About3Page } from '../about3/about3';

@IonicPage()
@Component({
  selector: 'page-about2',
  templateUrl: 'about2.html',
})
export class About2Page {
  Watchalong = About3Page
  constructor(public navCtrl: NavController, public navParams: NavParams) { }


Gopage3(){
  this.navCtrl.push(this.Watchalong);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad About3Page');
  }

}
