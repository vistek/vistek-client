'use strict';

require.config({
    paths: {
        angular: '../../bower_components/angular/angular',
        angularRoute: '../../bower_components/angular-route/angular-route',
    },
    shim: {
        'angular': { 'exports': 'angular' },
        'angularRoute': ['angular']
    },
    priority: [
		"angular"
    ]
});

require([
	'angular',
	'app',
	'routes'
], function (angular, app, routes) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);

    angular.element().ready(function () {
        console.log(app['name']);
        angular.bootstrap([app['name']]);
    });
});