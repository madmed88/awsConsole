export class InstanceService {
  constructor() {
    this.apiUrl = "http://localhost:1234/instances";
  }

  create(data) {
    return fetch(this.apiUrl, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  list() {
    return fetch(`${this.apiUrl}/`);
  }

  details(id) {
    return fetch(`${this.apiUrl}/${id}`);
  }

  update(id, data) {
    return fetch(`${this.apiUrl}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }

  delete(id) {
    return fetch(`${this.apiUrl}/${id}`, {
      method: 'DELETE'
    });
  }
}
