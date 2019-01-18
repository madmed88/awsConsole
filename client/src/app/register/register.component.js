export const registerComponent = {
  template: `
    <div>
      <h1>Register</h1>
      <p class="lead">Already a member? Please <a href="#!login">log in</a> instead.</p>
      <form ng-submit="$ctrl.onSubmit()">
        <div class="form-group">
          <label for="name">Full name</label>
          <input type="text" class="form-control" id="name" placeholder="Enter your name" ng-model="$ctrl.credentials.name">
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email" ng-model="$ctrl.credentials.email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password" ng-model="$ctrl.credentials.password">
        </div>
        <button type="submit" class="btn btn-default">Register!</button>
      </form>
    </div>
  `,
  controller: function ($location, authentication) {
    'ngInject';
    this.credentials = {
      name : "",
      email : "",
      password : ""
    };

    this.onSubmit = function () {
      authentication
        .register(this.credentials)
        .then(() => {
          $location.path('/');
        }, (res) => {
          alert(res.data.message);
        });
    };
  }
}
