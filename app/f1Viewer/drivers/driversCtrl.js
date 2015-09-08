(function () {
    'use strict';

    angular.module('f1Viewer.drivers')
        .controller('driversCtrl', ['$scope', '$http', '$log', 'f1Service', function ($scope, $http, $log, f1Service) {
            $scope.loading = true;
            f1Service.getDriverDetails()
                .then(function (response) {
                    $scope.drivers = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                    $scope.driverDetailsNotFound = false;
                }
                ,function (response) {
                    $log.error("Unable to get Driver details");
                    $scope.drivers = [];
                    $scope.driverDetailsNotFound = true;
                })
                .finally(function() {
                    $scope.loading = false;
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
