import './navbar.less';

export const navbarComponent = {
  template: `
    <div class="Navbar">
      <div class="Navbar-logo">
        <logo></logo>
      </div>
      <button ng-click="$ctrl.logout()" class="logout-button">Sign out</button>
    </div>
  `,
  controller: function(authentication, $location) {
    'ngInject';
    this.authentication = authentication;
    this.logout = () => {
      this.authentication.logout();
      $location.path('/login');
    }
  }
}
