'use strict'

var data = require('./data.json')

/** Precompute name and code lookups. */
var nameMap = {}
var codeMap = {}
data.forEach(mapCodeAndName)

function mapCodeAndName (country) {
  nameMap[country.name.toLowerCase()] = country.alpha2
  codeMap[country.alpha2.toLowerCase()] = country.name
}

module.exports = data

module.exports.overwrite = function overwrite (countries) {
  if (!countries || !countries.length) return
  countries.forEach(function (country) {
    var foundIndex = data.findIndex(function (item) {
      return item.alpha2 === country.alpha2
    })
    data[foundIndex] = country
    mapCodeAndName(country)
  })
}

module.exports.getCode = function getCode (name) {
  return nameMap[name.toLowerCase()]
}

module.exports.getName = function getName (alpha2) {
  return codeMap[alpha2.toLowerCase()]
}

module.exports.getNames = function getNames () {
  return data.map(function (country) {
    return country.name
  })
}

module.exports.getCodes = function getCodes () {
  return data.map(function (country) {
    return country.alpha2
  })
}

module.exports.getCodeList = function getCodeList () {
  return codeMap
}

module.exports.getNameList = function getNameList () {
  return nameMap
}

module.exports.add = function add (country, name, euMember) {
  if (!name) data.push(country)
  else data.push({ alpha2: country, name, euMember })
}

module.exports.remove = function remove (id) {
  if (typeof id === 'number') data.splice(id, 1)
  if (typeof id === 'string') {
    var foundIndex = data.findIndex(function (item) {
      return item.alpha2 === id
    })
    data.splice(foundIndex, 1)
  }
}
