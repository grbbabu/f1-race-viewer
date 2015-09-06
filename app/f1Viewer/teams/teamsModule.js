(function(){
    'use strict';

    angular.module('f1Viewer.teams', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/teams', {
                templateUrl: 'f1Viewer/teams/teams.html',
                controller: 'teamsCtrl'
            });
        }]);
}());