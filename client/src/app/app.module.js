import angular from 'angular';
import 'angular-route';
import {AppComponent} from './app.component';
import {appConfig} from './app.config';
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
  .component('app', AppComponent)
  .name;
