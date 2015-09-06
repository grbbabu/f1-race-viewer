(function(){
    'use strict';

    angular.module('f1Viewer.drivers', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/drivers', {
                templateUrl: 'f1Viewer/drivers/drivers.html',
                controller: 'driversCtrl'
            });
        }]);
}());