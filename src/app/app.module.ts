import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { About2Page } from '../pages/about2/about2';
import { About3Page } from '../pages/about3/about3';
import { About4Page } from '../pages/about4/about4';
import { About5Page } from '../pages/about5/about5';
import { About6Page } from'../pages/about6/about6';
import { About7Page } from '../pages/about7/about7';
import { About8Page } from'../pages/about8/about8';
import { About9Page } from '../pages/about9/about9';
import { About10Page } from'../pages/about10/about10';
@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    AboutPage,
    About2Page,
    About3Page,
    About4Page,
    About5Page,
    About6Page,
    About7Page,
    About8Page,
    About9Page,
    About10Page,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    AboutPage,
    About2Page,
    About3Page,
    About4Page,
    About5Page,
    About6Page,
    About7Page,
    About8Page,
    About9Page,
    About10Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
