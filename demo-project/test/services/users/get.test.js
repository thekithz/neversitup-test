const assert = require('assert');
const app = require('../../../src/app');

describe('\'users/get\' service', () => {
  it('registered the service', () => {
    const service = app.service('users/get');

    assert.ok(service, 'Registered the service');
  });
});
