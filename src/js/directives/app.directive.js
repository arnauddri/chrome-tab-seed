/* global angular */

function AppDirective ($scope) {
}

module.exports = angular.module('app.directive', [])
  .directive('AppDirective', ['$scope', AppDirective])
