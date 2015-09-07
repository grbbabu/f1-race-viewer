(function () {
    'use strict';

    angular.module('f1Viewer')
        .service('f1Service', ['$http', function ($http) {
            this.getRaceDetails = function () {
                return $http.get('http://ergast.com/api/f1/2015/results/1.json');
            };
            this.getDriverDetails = function () {
                return $http.get('http://ergast.com/api/f1/2015/driverStandings.json');
            };
        }]);
}());
