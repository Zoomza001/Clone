import { Component } from '@angular/core';
import { HomePage } from '../home/home';

import { AboutPage } from '../about/about';
import { About2Page } from '../about2/about2';
import { About3Page } from'../about3/about3';
import { About4Page } from'../about4/about4';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = About2Page;
  tab4Root = About3Page;
  tab5Root = About4Page;
  constructor() {

  }
}