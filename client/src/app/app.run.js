export function appRun($rootScope, $location, authentication) {
  $rootScope.$on('$routeChangeStart', function () {
    if ($location.path() === '/' && !authentication.isLoggedIn()) {
      $location.path('/login');
    }
  });
}
