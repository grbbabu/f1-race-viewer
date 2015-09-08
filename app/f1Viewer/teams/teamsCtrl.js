(function () {
    'use strict';

    angular.module('f1Viewer.teams')
        .controller('teamsCtrl', ['$scope', '$http', '$log', 'f1Service', function ($scope, $http, $log, f1Service) {
            $scope.loading = true;
            f1Service.getConstructorDetails()
                .then(function (response) {
                    $scope.teams = response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
                    $scope.teamDetailsNotFound = false;
                },
                function (response) {
                    $log.error("Unable to get Driver details");
                    $scope.teams = [];
                    $scope.teamDetailsNotFound = true;
                })
                .finally(function() {
                    $scope.loading = false;
                });

            $scope.showTeamDetails = function () {
                if (typeof($scope.teamDetailsNotFound) !== 'undefined') {
                    return $scope.teams && ($scope.teams.length > 0);
                } else {
                    return true;
                }
            }
        }]);
}());
