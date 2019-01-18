import './dashboard.less';

export const dashboardComponent = {
  template: `
    <div class="grid">
      <header-item on-click="$ctrl.sortBy(propertyName)" label="'Name'"
        header-property="'name'" selected-property="$ctrl.propertyName" reverse="$ctrl.reverse"></header-item>
      <header-item on-click="$ctrl.sortBy(propertyName)" label="'Instance ID'"
        header-property="'id'" selected-property="$ctrl.propertyName" reverse="$ctrl.reverse"></header-item>
      <header-item on-click="$ctrl.sortBy(propertyName)" label="'Instance Type'"
        header-property="'type'" selected-property="$ctrl.propertyName" reverse="$ctrl.reverse"></header-item>
      <header-item on-click="$ctrl.sortBy(propertyName)" label="'State'"
        header-property="'state'" selected-property="$ctrl.propertyName" reverse="$ctrl.reverse"></header-item>
      <header-item on-click="$ctrl.sortBy(propertyName)" label="'Availability Zone'"
        header-property="'az'" selected-property="$ctrl.propertyName" reverse="$ctrl.reverse"></header-item>
      <header-item on-click="$ctrl.sortBy(propertyName)" label="'Public IP'"
        header-property="'publicIP'" selected-property="$ctrl.propertyName" reverse="$ctrl.reverse"></header-item>
      <header-item on-click="$ctrl.sortBy(propertyName)" label="'Private IP'"
        header-property="'privateIP'" selected-property="$ctrl.propertyName" reverse="$ctrl.reverse"></header-item>

      <span ng-repeat-start="instance in $ctrl.data | orderBy:$ctrl.propertyName:$ctrl.reverse">{{instance.name}}</span>
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
    instanceService.list()
      .then((response) => this.data = response.data);

    this.sortBy = function (propertyName) {
      this.reverse = (this.propertyName === propertyName) ? !this.reverse : false;
      this.propertyName = propertyName;
    };
  }
};

