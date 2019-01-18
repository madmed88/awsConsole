import './app.less';

export const AppComponent = {
  template: `
    <button ng-if="$ctrl.authentication.isLoggedIn()" ng-click="$ctrl.logout()">Logout</button>
    <div ng-view></div>
  `,
  controller: function(authentication, $location) {
    'ngInject';
    this.authentication = authentication;
    this.logout = () => {
      this.authentication.logout();
      $location.path('/login');
    }
  }
};
