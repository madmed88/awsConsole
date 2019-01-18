/* @ngInject */
export class InstanceService {
  constructor($http, authentication) {
    'ngInject';
    this.apiUrl = "/instances";
    this.$http = $http;
    this.authHeaders =  {Authorization: 'Bearer '+ authentication.getToken()}
  }

  create(data) {
    return this.$http.post(this.apiUrl, data, {headers: this.authHeaders});
  }

  list() {
    return this.$http.get(`${this.apiUrl}/`, {headers: this.authHeaders});
  }

  details(id) {
    return this.$http.get(`${this.apiUrl}/${id}`, {headers: this.authHeaders});
  }

  update(id, data) {
    return this.$http.put(`${this.apiUrl}/${id}`, data, {headers: this.authHeaders});
  }

  delete(id) {
    return this.$http.delete(`${this.apiUrl}/${id}`, {headers: this.authHeaders});
  }
}
