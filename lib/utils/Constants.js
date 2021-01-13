const Package = require('../../package.json')

exports.KyoukoAPI = 'https://kyouko.se/api'

exports.UserAgent = `Kyouko (${Package.homepage.split('#')[0]}, ${Package.version}) Node.js/${process.version}`
