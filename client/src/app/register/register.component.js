export const registerComponent = {
  template: `
    <div class="Register panel">
      <div class="Register-logoArea logo-area">
        <div class="Register-logo logo"></div>
      </div>
      <form class="Register-form form" ng-submit="$ctrl.onSubmit()">
        <input type="text" class="form-control" id="name" placeholder="Enter your name" ng-model="$ctrl.credentials.name">
        <input type="email" class="form-control" id="email" placeholder="Enter email" ng-model="$ctrl.credentials.email">
        <input type="password" class="form-control" id="password" placeholder="Password" ng-model="$ctrl.credentials.password">
        <button type="submit" class="button">Register</button>
      </form>
      <p>Already a member? Please <a href="#!login">log in</a> instead.</p>
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
      if (this.credentials.name && this.credentials.email && this.credentials.password) {
        authentication
        .register(this.credentials)
        .then(() => {
          $location.path('/');
        }, (res) => {
          alert(res.data.message);
        });
      }
    };
  }
}
