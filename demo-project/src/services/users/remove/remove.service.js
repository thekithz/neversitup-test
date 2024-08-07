// Initializes the `users/remove` service on path `/users/remove`
const { Remove } = require('./remove.class');
const hooks = require('./remove.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/users/remove', new Remove(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('users/remove');

  service.hooks(hooks);
};
