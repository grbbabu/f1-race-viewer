// F1 Viewer Module
(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('f1Viewer', ['ngRoute', 'f1Viewer.drivers', 'f1Viewer.races', 'f1Viewer.teams'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.otherwise({redirectTo: '/races'});
        }])
        .constant('VERSION', '0.0.1');
}());
