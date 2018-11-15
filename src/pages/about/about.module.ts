import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';
import { About2Page } from'../about2/about2';



@NgModule({
  declarations: [
    AboutPage,
    About2Page,
    
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
  ],
})
export class AboutPageModule {}
