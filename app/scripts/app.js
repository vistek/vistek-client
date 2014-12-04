'use strict';

define([
	'angular',
	'controllers',
	'angularRoute',
], function (angular, controllers) {

    return angular.module('myApp', [
        'ngRoute',
        'myApp.controllers'
    ]);

});