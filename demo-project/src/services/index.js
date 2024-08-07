const usersModelUsers = require('./users/_model/users.service.js');
const usersCreate = require('./users/create/create.service.js');
const usersUpdate = require('./users/update/update.service.js');
const usersRemove = require('./users/remove/remove.service.js');
const usersGet = require('./users/get/get.service.js');
const usersList = require('./users/list/list.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(usersModelUsers);
  app.configure(usersCreate);
  app.configure(usersUpdate);
  app.configure(usersRemove);
  app.configure(usersGet);
  app.configure(usersList);
};
