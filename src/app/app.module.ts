import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { OtherPage } from "../pages/otherPage/otherPage";
import { CaractSexo } from "../component/caractSexo";
import { KnowSexService } from '../services/knowsex';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OtherPage,
    CaractSexo
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OtherPage,
    CaractSexo
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KnowSexService
  ]
})
export class AppModule {}
