import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProgramPage } from '../pages/programs/program';
import { TeamMembersPage } from '../pages/teamMembers/teamMembers';
import { UserInfoPage } from '../pages/userInfo/userInfo';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BoxCheckedValidator } from '../providers/checkBoxValidators/boxCheckedValidator';
import { SlackMessaging } from '../providers/slackIntegration/slackMessaging';
import { EmailComposer } from '@ionic-native/email-composer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProgramPage,
    TeamMembersPage,
    UserInfoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProgramPage,
    TeamMembersPage,
    UserInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BoxCheckedValidator,
    SlackMessaging,
    EmailComposer
  ]
})
export class AppModule {}
