/* eslint-disable no-unused-vars */
const {NotFound} = require('@feathersjs/errors')
exports.List = class List {
  constructor(options, app) {
    this.options = options || {}
    this.app = app
  }

  async find(params) {
    try {
      const result = await this.app.service('_model/users').find(params)
      return result
    } catch (error) {
      throw new NotFound(error)
    }
  }
}
