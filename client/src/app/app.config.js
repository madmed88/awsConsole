export function appConfig($routeProvider) {
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
