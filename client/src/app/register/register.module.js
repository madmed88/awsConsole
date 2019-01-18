import angular from 'angular';
import { registerComponent } from './register.component';

export const RegisterModule = angular
  .module('AWSConsole.register', [])
  .component('register', registerComponent)
  .name;
