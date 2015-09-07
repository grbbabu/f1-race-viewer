(function () {
    'use strict';

    angular.module('f1Viewer.teams')
        .controller('teamsCtrl', ['$scope', '$http', '$log', 'f1Service', function ($scope, $http, $log, f1Service) {
            f1Service.getConstructorDetails()
                .success(function (data) {
                    $scope.teams = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
                    $scope.yearOfStanding = data.MRData.StandingsTable.season;
                    $scope.teamDetailsNotFound = false;
                })
                .error(function (data, status, headers, config) {
                    $log.error("Unable to get Driver details");
                    $scope.teams = [];
                    $scope.yearOfStanding = '';
                    $scope.teamDetailsNotFound = true;
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
