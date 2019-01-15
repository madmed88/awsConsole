import angular from 'angular';
import {AppComponent} from './app.component';
import {DashboardModule} from './dashboard/dashboard.module';

export const AppModule = angular
  .module('AWSConsole', [
    DashboardModule
  ])
  .component('app', AppComponent)
  .name;
