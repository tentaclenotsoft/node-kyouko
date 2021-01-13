const Request = require('./Request.js')
const { createReadStream } = require('fs')

module.exports = class Kyouko extends Request {
  /**
   * @param {string} token The your api key to perform operations on the service
   */
  constructor (token) {
    super(token)
  }

  /**
   * Upload file
   * @param {string} file Relative or absolute file path
   * @returns {Promise<Object>}
   */
  upload (file) {
    return this._request('POST', '/upload', { 'files[]': createReadStream(file) })
  }

  /**
   * Delete file
   * @param {number|string} id File identification number
   * @returns {Promise<Object>}
   */
  delete (id) {
    return this._request('DELETE', `/file/${id}`)
  }

  /**
   * Gets all your files sent
   * @returns {Promise<Object>}
   */
  files () {
    return this._request('GET', '/files')
  }

  /**
   * Details about user
   * @returns {Promise<Object>}
   */
  me () {
    return this._request('GET', '/users/me')
  }
}
