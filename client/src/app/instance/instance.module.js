import angular from 'angular';
import {InstanceService} from './instance.service';

export const InstanceModule = angular
  .module('AWSConsole.instance', [])
  .service('instanceService', InstanceService)
  .name;
