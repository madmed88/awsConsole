import angular from 'angular';
import {dashboardComponent} from './dashboard.component';
import {InstanceModule} from '../instance/instance.module';
import { headerItemComponent } from './header-item.component';
import { NavbarModule } from '../navbar/navbar.module';

export const DashboardModule = angular
  .module('AWSConsole.dashboard', [InstanceModule, NavbarModule])
  .component('dashboard', dashboardComponent)
  .component('headerItem', headerItemComponent)
  .name;