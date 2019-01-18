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
});
