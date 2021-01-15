const fetch = require('node-fetch')
const FormData = require('form-data')

const Constants = require('../utils/Constants.js')

module.exports = class Request {
  constructor (token) {
    if (typeof token !== 'string') {
      throw new TypeError('TOKEN_INVALID', 'token', 'a string')
    }

    this.token = token
    this.baseURL = Constants.KyoukoAPI
  }

  _request (
    method,
    endpoint,
    {
      form = null,
      payload = null
    } = {}
  ) {
    return fetch(`${this.baseURL}${endpoint}`, {
      method,
      headers: {
        Accept: 'application/vnd.lewdcat.json',
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json',
        'User-Agent': Constants.UserAgent
      },
      ...(
        method !== 'GET' &&
        {
          body: (
            (form && this._parseForm(form)) ||
            (payload && JSON.stringify(payload))
          )
        }
      )
    })
      .then((response) => response.json())
  }

  _parseForm (data) {
    const _FormData = new FormData()

    Object.entries(data)
      .filter(([, value]) => value !== null)
      .map(([key, value]) => _FormData.append(key, value))

    return _FormData
  }
}
