import './header-item.less';

export const headerItemComponent = {
  bindings: {
    label: '<',
    headerProperty: '<',
    selectedProperty: '<',
    reverse: '<',
    onClick: '&'
  },
  template: `
    <button class="HeaderItem" ng-click="$ctrl.onClick({propertyName: $ctrl.headerProperty})"
     ng-class="{reverse: $ctrl.reverse, selected: $ctrl.selectedProperty === $ctrl.headerProperty}">
      {{$ctrl.label}}
    </button>
  `
}
