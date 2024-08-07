const assert = require('assert');
const app = require('../../../src/app');

describe('\'users/update\' service', () => {
  it('registered the service', () => {
    const service = app.service('users/update');

    assert.ok(service, 'Registered the service');
  });
});
