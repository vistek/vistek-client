'use strict';

define(['angular'], function (angular) {

    /* Controllers */

    return angular.module('myApp.controllers', [])
		// Sample controller where service is being used
		.controller('MyCtrl1', ['$scope', function ($scope) {
		    console.log("111111");
		}])
		// More involved example where controller is required from an external file
		.controller('MyCtrl2', ['$scope', function ($scope) {
		    console.log("222222");
		}]);
});