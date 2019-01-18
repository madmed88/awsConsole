import angular from 'angular';
import 'angular-route';
import {AppComponent} from './app.component';
import {appConfig} from './app.config';
import {appRun} from './app.run';
import {DashboardModule} from './dashboard/dashboard.module';
import {AuthenticationModule} from './authentication/authentication.module';
import {LoginModule} from './login/login.module';
import {RegisterModule} from './register/register.module';

export const AppModule = angular
  .module('AWSConsole', [
    'ngRoute',
    DashboardModule,
    AuthenticationModule,
    LoginModule,
    RegisterModule
  ])
  .config(appConfig)
  .run(appRun)
  .component('app', AppComponent)
  .name;
