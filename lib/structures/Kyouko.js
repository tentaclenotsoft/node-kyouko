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
    return this._request('POST', '/upload', { form: { 'files[]': createReadStream(file) } })
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

  /**
   * Create a new album
   * @param {string} name Name for the album
   * @returns {Promise<Object>}
   */
  createAlbum (name) {
    return this._request('POST', '/album/new', { payload: { name } })
  }

  /**
   * Delete a exists album
   * @param {number|string} id Album identification number
   * @returns {Promise<Object>}
   */
  deleteAlbum (id) {
    return this._request('DELETE', `/album/${id}`)
  }

  /**
   * Get information from all your albums
   * @returns {Promise<Object>}
   */
  albums () {
    return this._request('GET', '/albums/mini')
  }

  /**
   * Add a file to an album
   * @param {number} albumId Album identification number
   * @param {number} fileId File identification number
   * @returns {Promise<Object>}
   */
  addFileAlbum (albumId, fileId) {
    return this._request('POST', '/file/album/add', { payload: { albumId, fileId } })
  }

  /**
   * Remove a file from an album
   * @param {number} albumId Album identification number
   * @param {number} fileId File identification number
   * @returns {Promise<Object>}
   */
  removeFileAlbum (albumId, fileId) {
    return this._request('POST', '/file/album/del', { payload: { albumId, fileId } })
  }
}
