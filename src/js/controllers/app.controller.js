/* global angular */

function AppCtrl ($scope) {
  var vm = this;

  vm.title = 'Hello World!'
}

module.exports = angular.module('app.controller', [])
  .controller('AppCtrl', ['$scope', AppCtrl])
