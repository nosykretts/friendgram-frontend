'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FB_APP_ID : '"198719390704632"',
  GOOGLE_API_KEY : '"AIzaSyAoGN1WdsH2WKDuIFguodDYKrBn88dLNcg"'
})
