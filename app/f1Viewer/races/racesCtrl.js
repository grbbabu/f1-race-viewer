(function () {
    'use strict';

    angular.module('f1Viewer.races')
        .controller('racesCtrl', ['$scope', 'f1Service', '$log', function ($scope, f1Service, $log) {
            $scope.loading = true;
            f1Service.getRaceDetails()
                .then(function (response) {
                    $scope.races = response.data.MRData.RaceTable.Races;
                    $scope.raceDetailsNotFound = false;
                },
                function (response) {
                    $log.error("Unable to get race details");
                    $scope.races = [];
                    $scope.raceDetailsNotFound = true;
                })
                .finally(function() {
                    $scope.loading = false;
                });


            $scope.showRaceDetails = function () {
                if (typeof($scope.raceDetailsNotFound) !== 'undefined') {
                    return $scope.races && ($scope.races.length > 0);
                } else {
                    return true;
                }
            }
        }]);
}());
