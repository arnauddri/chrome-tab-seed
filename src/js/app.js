/* global angular */
require('d3')
require('angular')
require('lodash')
require('angular-local-storage')

var ctrl = require('./controllers/app.controller.js')
var directive = require('./directives/app.directive.js')
var filter = require('./filters/app.filter.js')
var provider = require('./providers/app.provider.js')

angular.module('myApp', [
  'LocalStorageModule',
  ctrl.name,
  directive.name,
  filter.name,
  provider.name
])