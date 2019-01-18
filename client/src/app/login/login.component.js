export const loginComponent = {
  template: `
  <div class="Login panel">
    <div class="Login-logoArea logo-area">
      <div class="Login-logo logo"></div>
    </div>
    <form class="Login-form form" ng-submit="$ctrl.onSubmit()">
      <input type="email" class="form-control" id="email" placeholder="Enter email" ng-model="$ctrl.credentials.email">
      <input type="password" class="form-control" id="password" placeholder="Password" ng-model="$ctrl.credentials.password">
      <button type="submit" class="Login-button button">Sign in</button>
    </form>
    <p>Not a member? Please <a href="#!register">register</a> instead.</p>
  </div>
  `,
  controller: function ($location, authentication) {
    'ngInject';
    this.credentials = {
      email : "",
      password : ""
    };

    this.onSubmit = function () {
      authentication
        .login(this.credentials)
        .then(() => {
          $location.path('/');
        }, (res) => {
          alert(res.data.message);
        });
    };
  }
}
