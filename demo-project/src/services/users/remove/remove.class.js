/* eslint-disable no-unused-vars */
const {BadRequest} = require('@feathersjs/errors')
exports.Remove = class Remove {
  constructor(options, app) {
    this.options = options || {}
    this.app = app || {}
  }

  async remove(id, params) {
    try {
      const result = await this.app.service('_model/users').remove(id, params)
      return result
    } catch (error) {
      throw new BadRequest(error)
    }
  }
}
