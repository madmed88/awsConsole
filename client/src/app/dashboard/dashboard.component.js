import './dashboard.less';

export const dashboardComponent = {
  template: `
    <div class="grid">
      <span><strong>Name</strong></span>
      <span><strong>Instance ID</strong></span>
      <span><strong>Instance Type</strong></span>
      <span><strong>State</strong></span>
      <span><strong>Availabilty Zone</strong></span>
      <span><strong>PublicIP</strong></span>
      <span><strong>PrivateIP</strong></span>
      <span ng-repeat-start="instance in $ctrl.data">{{instance.name}}</span>
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
      .then((response) => this.data = response.data)
  }
};

