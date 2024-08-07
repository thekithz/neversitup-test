/* eslint-disable no-unused-vars */
const {BadRequest, NotFound} = require('@feathersjs/errors')
exports.Get = class Get {
  constructor(options, app) {
    this.options = options || {}
    this.app = app
  }

  async get(id, params) {
    try {
      const result = await this.app.service('_model/users').get(id, params)
      return result
    } catch (error) {
      throw new NotFound(error)
    }
  }

}
