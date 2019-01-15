export const dashboardComponent = {
  template: `
    <div ng-repeat="instance in $ctrl.data">{{instance.name}}</div>
  `,
  controller: function (instanceService) {
    instanceService.list()
      .then((response) => this.data = response.data)
  }
};

