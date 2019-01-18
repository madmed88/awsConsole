import angular from 'angular';
import {authentication} from './authentication.service';

export const AuthenticationModule = angular
  .module('AWSConsole.authentication', [])
  .service('authentication', authentication)
  .name;
