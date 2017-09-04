import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProgramPage } from '../pages/programs/program';
import { TeamMembersPage } from '../pages/teamMembers/teamMembers';

import { HttpModule } from '@angular/http';
import { TeamMemberValidator } from '../providers/teamMemberValidator/teamMemberValidator';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProgramPage,
    TeamMembersPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProgramPage,
    TeamMembersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TeamMemberValidator
  ]
})
export class AppModule {}
