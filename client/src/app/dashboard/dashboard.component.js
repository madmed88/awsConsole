import './dashboard.less';

export const dashboardComponent = {
  template: `
    <div class="grid">
      <header-item on-click="$ctrl.sortBy(propertyName)" on-filter="$ctrl.addFilter(propertyName, query)" label="'Name'"
        header-property="'name'" selected-property="$ctrl.propertyName" reverse="$ctrl.reverse"></header-item>
      <header-item on-click="$ctrl.sortBy(propertyName)" on-filter="$ctrl.addFilter(propertyName, query)" label="'Instance ID'"
        header-property="'id'" selected-property="$ctrl.propertyName" reverse="$ctrl.reverse"></header-item>
      <header-item on-click="$ctrl.sortBy(propertyName)" on-filter="$ctrl.addFilter(propertyName, query)" label="'Instance Type'"
        header-property="'type'" selected-property="$ctrl.propertyName" reverse="$ctrl.reverse"></header-item>
      <header-item on-click="$ctrl.sortBy(propertyName)" on-filter="$ctrl.addFilter(propertyName, query)" label="'State'"
        header-property="'state'" selected-property="$ctrl.propertyName" reverse="$ctrl.reverse"></header-item>
      <header-item on-click="$ctrl.sortBy(propertyName)" on-filter="$ctrl.addFilter(propertyName, query)" label="'Availability Zone'"
        header-property="'az'" selected-property="$ctrl.propertyName" reverse="$ctrl.reverse"></header-item>
      <header-item on-click="$ctrl.sortBy(propertyName)" on-filter="$ctrl.addFilter(propertyName, query)" label="'Public IP'"
        header-property="'publicIP'" selected-property="$ctrl.propertyName" reverse="$ctrl.reverse"></header-item>
      <header-item on-click="$ctrl.sortBy(propertyName)" on-filter="$ctrl.addFilter(propertyName, query)" label="'Private IP'"
        header-property="'privateIP'" selected-property="$ctrl.propertyName" reverse="$ctrl.reverse"></header-item>

      <span ng-repeat-start="instance in $ctrl.data | filter:$ctrl.filterFunction | orderBy:$ctrl.propertyName:$ctrl.reverse">{{instance.name}}</span>
      <span>{{instance.id}}</span>
      <span>{{instance.type}}</span>
      <span>{{instance.state}}</span>
      <span>{{instance.az}}</span>
      <span>{{instance.publicIP}}</span>
      <span ng-repeat-end>{{instance.privateIP}}</span>
    </div>
  `,
  controller: function (instanceService) {
    'ngInject';
    this.filters = new Map();

    instanceService.list()
      .then((response) => this.data = response.data);

    this.sortBy = function (propertyName) {
      this.reverse = (this.propertyName === propertyName) ? !this.reverse : false;
      this.propertyName = propertyName;
    };

    this.addFilter = (propertyName, query) => {
      this.filters.set(propertyName, query);
    }

    this.filterFunction = (instance) => {
      return Array.from(this.filters)
        .every((filter) => instance[filter[0]].match(filter[1]));
    }
  }
};

