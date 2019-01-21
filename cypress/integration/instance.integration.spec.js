context('Instance integration', () => {

  const instance = {
    name: 'instance99',
    id: 'a-52355mbel',
    type: 't1.large',
    state: 'running',
    az: 'us-west-1a',
    publicIP: '54.20.165.204',
    privateIP: '10.25.30.46'
  };

  let instanceCount = 0, token;

  it('should login', () => {
    cy.request('POST', 'http://localhost:1234/users/login', {email : 'medbelh@gmail.com', password : 'madmed88'})
      .then((response) => {
        token = response.body.token;
      });
  })

  it('should create new instances', () => {
    cy.request({method: 'GET', url: 'http://localhost:1234/instances', headers: {Authorization: 'Bearer '+ token}})
      .then((response) => {
        instanceCount = response.body.length;
      });
    cy.request({method: 'POST', url: 'http://localhost:1234/instances', headers: {Authorization: 'Bearer '+ token}, body: instance})
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq('instance99');
      });
  });

  it('should get newly created instance by its id', () => {
    cy.request({method: 'GET', url: 'http://localhost:1234/instances/a-52355mbel', headers: {Authorization: 'Bearer '+ token}})
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq('instance99');
      });
  });

  it('should update newly created instance by its id', () => {
    cy.request({method: 'PUT', url: 'http://localhost:1234/instances/a-52355mbel', headers: {Authorization: 'Bearer '+ token}, body: { name: 'instance100' }})
      .should((response) => {
        expect(response.status).to.eq(200)
      });
    cy.request({method: 'GET', url: 'http://localhost:1234/instances/a-52355mbel', headers: {Authorization: 'Bearer '+ token}})
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq('instance100');
      });
  });

  it('should delete newly created instance by its id', () => {
    cy.request({method: 'DELETE', url: 'http://localhost:1234/instances/a-52355mbel', headers: {Authorization: 'Bearer '+ token}})
      .should((response) => {
        expect(response.status).to.eq(200)
      });
    cy.request({method: 'GET', url: 'http://localhost:1234/instances', headers: {Authorization: 'Bearer '+ token}})
      .should((response) => {
        expect(response.body.length).to.eq(instanceCount);
      });
  });
});
