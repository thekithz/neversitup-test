/* eslint-disable no-unused-vars */
const {BadRequest} = require('@feathersjs/errors')
exports.Update = class Update {
  constructor(options, app) {
    this.options = options || {}
    this.app = app
  }

  async patch(id, data, params) {
    try {
      const result = await this.app.service('_model/users').patch(id, data, params)
      return result
    } catch (error) {
      throw new BadRequest(error)
    }
  }

}
