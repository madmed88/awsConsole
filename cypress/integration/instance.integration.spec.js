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

  let instanceCount = 0

  it('should create new instances', () => {
    cy.request('GET', 'http://localhost:1234/instances')
      .then((response) => {
        instanceCount = response.body.length;
      });
    cy.request('POST', 'http://localhost:1234/instances', instance)
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq('instance99');
      });
  });

  it('should get newly created instance by its id', () => {
    cy.request('GET', 'http://localhost:1234/instances/a-52355mbel')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq('instance99');
      });
  });

  it('should update newly created instance by its id', () => {
    cy.request('PUT', 'http://localhost:1234/instances/a-52355mbel', { name: 'instance100' })
      .should((response) => {
        expect(response.status).to.eq(200)
      });
    cy.request('GET', 'http://localhost:1234/instances/a-52355mbel')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq('instance100');
      });
  });

  it('should delete newly created instance by its id', () => {
    cy.request('DELETE', 'http://localhost:1234/instances/a-52355mbel')
      .should((response) => {
        expect(response.status).to.eq(200)
      });
    cy.request('GET', 'http://localhost:1234/instances')
      .should((response) => {
        expect(response.body.length).to.eq(instanceCount);
      });
  });
});
