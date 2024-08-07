// Initializes the `users/update` service on path `/users/update`
const { Update } = require('./update.class');
const hooks = require('./update.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/users/update', new Update(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('users/update');

  service.hooks(hooks);
};
