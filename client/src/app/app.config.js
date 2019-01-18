export function appConfig($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      template: '<dashboard></dashboard>'
    })
    .when('/register', {
      template: '<register></register>'
    })
    .when('/login', {
      template: '<login></login>'
    })
    .otherwise({redirectTo: '/'});
}
