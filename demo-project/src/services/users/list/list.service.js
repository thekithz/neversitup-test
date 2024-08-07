// Initializes the `users/list` service on path `/users/list`
const { List } = require('./list.class');
const hooks = require('./list.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/users/list', new List(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('users/list');

  service.hooks(hooks);
};
