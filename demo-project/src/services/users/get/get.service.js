// Initializes the `users/get` service on path `/users/get`
const { Get } = require('./get.class');
const hooks = require('./get.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/users/get', new Get(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('users/get');

  service.hooks(hooks);
};
