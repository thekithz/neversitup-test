const assert = require('assert');
const app = require('../../../src/app');

describe('\'users/remove\' service', () => {
  it('registered the service', () => {
    const service = app.service('users/remove');

    assert.ok(service, 'Registered the service');
  });
});
