(function(){
    'use strict';

    angular.module('f1Viewer.races', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/races', {
                templateUrl: 'f1Viewer/races/races.html',
                controller: 'racesCtrl'
            });
        }]);
}());