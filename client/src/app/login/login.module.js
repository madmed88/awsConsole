import angular from 'angular';
import { loginComponent } from './login.component';

export const LoginModule = angular
  .module('AWSConsole.login', [])
  .component('login', loginComponent)
  .name;
