/* global angular */

function AppFilter ($scope) {
}

module.exports = angular.module('app.filter', [])
  .directive('AppFilter', ['$scope', AppFilter])
