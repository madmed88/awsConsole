export const loginComponent = {
  template: `
  <div>
    <h1 class="form-signin-heading">Sign in</h1>
    <p class="lead">Not a member? Please <a href="#!register">register</a> instead.</p>

    <form ng-submit="$ctrl.onSubmit()">
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" ng-model="$ctrl.credentials.email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password" ng-model="$ctrl.credentials.password">
      </div>
      <button type="submit" class="btn btn-default">Sign in!</button>
    </form>
  </div>
  `,
  controller: function ($location, authentication) {
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
