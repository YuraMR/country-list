'use strict'

var data = require('./data.json')

module.exports = function getList (locale) {
  return data.map(function (country) {
    return ({
      ...country,
      name: country.name[locale] || country.name.de
    })
  })
}
