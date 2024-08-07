const assert = require('assert');
const app = require('../../../../src/app');

describe('\'users/_model/users\' service', () => {
  it('registered the service', () => {
    const service = app.service('users/_model/users');

    assert.ok(service, 'Registered the service');
  });
});
