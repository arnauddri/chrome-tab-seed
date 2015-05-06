/* global angular */

function AppProvider ($scope) {
}

module.exports = angular.module('app.provider', [])
  .directive('AppProvider', ['$scope', AppProvider])
