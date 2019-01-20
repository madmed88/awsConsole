import angular from 'angular';
import {navbarComponent} from './navbar.component';
import { logoComponent } from './logo/logo.component';

export const NavbarModule = angular
  .module('AWSConsole.navbar', [])
  .component('navbar', navbarComponent)
  .component('logo', logoComponent)
  .name;