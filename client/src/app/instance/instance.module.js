import angular from 'angular';
import {InstanceService} from './instance.service';

export const InstanceModule = angular
  .module('AWSConsole.instance', ['AWSConsole.authentication'])
  .service('instanceService', InstanceService)
  .name;
