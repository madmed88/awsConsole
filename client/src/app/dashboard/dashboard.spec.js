import angular from 'angular';
import { DashboardModule } from './dashboard.module';

describe('dashboard', () => {
  let $componentController;
  beforeEach(angular.mock.module(DashboardModule));
  beforeEach(angular.mock.inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should reverse sorting when clicking on the same property name', () => {
    const ctrl = $componentController('dashboard');
    ctrl.sortBy('prop');
    expect(ctrl.reverse).toBe(false);
    ctrl.sortBy('prop');
    expect(ctrl.reverse).toBe(true);
    ctrl.sortBy('prop1');
    expect(ctrl.reverse).toBe(false);
  });

  it('should correctly combine all the filters', () => {
    const instancesList = [
      {name: 'in1', type: 'medium', ip: '123.123.123.123'},
      {name: 'second', type: 'small', ip: '221.221.221.221'},
      {name: 'myInstance', type: 'small', ip: '22.22.22.22'}
    ];
    const ctrl = $componentController('dashboard');
    ctrl.addFilter('type', 'Small');
    expect(instancesList.filter(ctrl.filterFunction).length).toEqual(2);
    ctrl.addFilter('name', 'my');
    expect(instancesList.filter(ctrl.filterFunction).length).toEqual(1);
    ctrl.addFilter('ip', '.55');
    expect(instancesList.filter(ctrl.filterFunction).length).toEqual(0);
    ctrl.addFilter('ip', '');
    expect(instancesList.filter(ctrl.filterFunction).length).toEqual(1);
  });
});
