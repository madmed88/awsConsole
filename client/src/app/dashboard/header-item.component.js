import './header-item.less';

export const headerItemComponent = {
  bindings: {
    label: '<',
    headerProperty: '<',
    selectedProperty: '<',
    reverse: '<',
    onClick: '&',
    onFilter: '&'
  },
  template: `
     <button class="HeaderItem-sortButton" ng-click="$ctrl.onClick({propertyName: $ctrl.headerProperty})"
     ng-class="{reverse: $ctrl.reverse, selected: $ctrl.selectedProperty === $ctrl.headerProperty}">
      {{$ctrl.label}}
    </button>

    <input class="HeaderItem-filterInput" ng-model="$ctrl.query" placeholder="Filter"
     ng-change="$ctrl.onFilter({propertyName: $ctrl.headerProperty, query: $ctrl.query})"/>
  `
}
