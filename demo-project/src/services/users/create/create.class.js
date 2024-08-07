/* eslint-disable no-unused-vars */
const {BadRequest} = require('@feathersjs/errors')
exports.Create = class Create {
  constructor(options, app) {
    this.options = options
    this.app = app
  }

  async create(data, params) {
    try {
      const result = await this.app.service('_model/users').create(data, params)
      return result
    } catch (error) {
      throw new BadRequest(error)
    }
  }

}
