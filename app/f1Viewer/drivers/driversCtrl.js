(function () {
    'use strict';

    angular.module('f1Viewer.drivers')
        .controller('driversCtrl', ['$scope', '$http', '$log', 'f1Service', function ($scope, $http, $log, f1Service) {
            f1Service.getDriverDetails()
                .success(function (data) {
                    $scope.drivers = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                    $scope.yearOfStanding = data.MRData.StandingsTable.season;
                    $scope.driverDetailsNotFound = false;
                })
                .error(function (data, status, headers, config) {
                    $log.error("Unable to get Driver details");
                    $scope.drivers = {};
                    $scope.yearOfStanding = '';
                    $scope.driverDetailsNotFound = true;
                });

            $scope.showDriverDetails = function () {
                if (typeof($scope.driverDetailsNotFound) !== 'undefined') {
                    return $scope.drivers && ($scope.drivers.length > 0);
                } else {
                    return true;
                }
            }
        }]);
}());
