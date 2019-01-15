import angular from 'angular';
import {dashboardComponent} from './dashboard.component';
import {InstanceModule} from '../instance/instance.module';

export const DashboardModule = angular
  .module('AWSConsole.dashboard', [InstanceModule])
  .component('dashboard', dashboardComponent)
  .name;