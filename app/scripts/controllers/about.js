'use strict';

/**
 * @ngdoc function
 * @name vistekClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vistekClientApp
 */
angular.module('vistekClientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
