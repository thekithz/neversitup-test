const assert = require('assert');
const app = require('../../../src/app');

describe('\'users/create\' service', () => {
  it('registered the service', () => {
    const service = app.service('users/create');

    assert.ok(service, 'Registered the service');
  });
});
