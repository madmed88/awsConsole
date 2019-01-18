/* @ngInject */
export class InstanceService {
  constructor($http) {
    'ngInject';
    this.apiUrl = "/instances";
    this.$http = $http;
  }

  create(data) {
    return this.$http.post(this.apiUrl, data);
  }

  list() {
    return this.$http.get(`${this.apiUrl}/`);
  }

  details(id) {
    return this.$http.get(`${this.apiUrl}/${id}`);
  }

  update(id, data) {
    return this.$http.put(`${this.apiUrl}/${id}`, data);
  }

  delete(id) {
    return this.$http.delete(`${this.apiUrl}/${id}`);
  }
}
