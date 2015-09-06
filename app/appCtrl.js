// F1 App Controller 
(function(){
    'use strict';

    angular.module('f1Viewer')
        .controller('appCtrl', ['$scope', 'VERSION', function($scope, VERSION) {
            $scope.version = VERSION;
        }]);
}());
