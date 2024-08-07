// Initializes the `users/create` service on path `/users/create`
const { Create } = require('./create.class');
const hooks = require('./create.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/users/create', new Create(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('users/create');

  service.hooks(hooks);
};
