const assert = require('assert');
const app = require('../../../src/app');

describe('\'users/list\' service', () => {
  it('registered the service', () => {
    const service = app.service('users/list');

    assert.ok(service, 'Registered the service');
  });
});
