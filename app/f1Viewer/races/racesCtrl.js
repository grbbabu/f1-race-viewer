(function(){
    'use strict';

    angular.module('f1Viewer.races')
        .controller('racesCtrl', ['$scope', 'f1Service', '$log', function($scope, f1Service, $log) {
            f1Service.getRaceDetails()
                .success(function(data) {
                    $scope.races = data.MRData.RaceTable.Races;
                    $scope.raceDetailsNotFound = false;
                })
                .error(function(data, status, headers, config){
                    $log.error("Unable to get race details");
                    $scope.races = {};
                    $scope.raceDetailsNotFound = true;
                });

            $scope.showRaceDetails = function() {
                if ( typeof($scope.raceDetailsNotFound) !== 'undefined') {
                    return $scope.races && ($scope.races.length > 0);
                } else {
                    return true;
                }
            }
        }]);
}());
