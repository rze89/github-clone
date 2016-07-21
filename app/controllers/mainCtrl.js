'use strict'

ghApp.controller('mainCtrl', function mainCtrlController(ghServices, $scope, $location) {

  $scope.searchParam;

    $scope.searchUser = function(){
        $location.path('user/' + $scope.searchParam);
    }
});
