'use strict'

const fs = require('fs')

function readFile(filename) {
  return fs.readFileSync(filename, 'utf-8')
}

function huskyOrYorkie(filename) {
  const data = readFile(filename)
  return data.indexOf('#husky') !== -1 || data.indexOf('#yorkie') !== -1
}

function ghooks(filename) {
  const data = readFile(filename)
  return data.indexOf('// Generated by ghooks. Do not edit this file.') !== -1
}

function preCommit(filename) {
  const data = readFile(filename)
  return data.indexOf('./node_modules/pre-commit/hook') !== -1
}

module.exports = {
  huskyOrYorkie,
  ghooks,
  preCommit
}
