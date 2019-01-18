import angular from 'angular';
import {dashboardComponent} from './dashboard.component';
import {InstanceModule} from '../instance/instance.module';
import { headerItemComponent } from './header-item.component';

export const DashboardModule = angular
  .module('AWSConsole.dashboard', [InstanceModule])
  .component('dashboard', dashboardComponent)
  .component('headerItem', headerItemComponent)
  .name;