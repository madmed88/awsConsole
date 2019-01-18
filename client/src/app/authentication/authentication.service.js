export class authentication {

  constructor($http, $window, $q) {
    'ngInject';
    this.$http = $http;
    this.$window = $window;
    this.$q = $q;
  }

  saveToken(token) {
    this.$window.localStorage['aws-token'] = token;
  }

  getToken() {
    return this.$window.localStorage['aws-token'];
  }

  isLoggedIn() {
    const token = this.getToken();
    let payload;

    if(token){
      payload = token.split('.')[1];
      payload = this.$window.atob(payload);
      payload = JSON.parse(payload);

      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  register(user) {
    return this.$http.post('/users/register', user).then((res) => {
      this.saveToken(res.data.token);
    }, (err) => this.$q.reject(err));
  }

  login(user) {
    return this.$http.post('/users/login', user).then((res) => {
      this.saveToken(res.data.token);
    }, (err) => this.$q.reject(err));
  }

  logout() {
    this.$window.localStorage.removeItem('aws-token');
  }
}
