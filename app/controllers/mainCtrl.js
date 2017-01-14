'use strict'

ghApp.controller('mainCtrl', function mainCtrlController(ghServices, $scope, $location) {

    $scope.searchParam;
    $scope.username;

    $scope.clearSearchNav = function (view) {
        if (view === $location.path()) {
            return true;
        }
        return false;
    };

    $scope.searchUser = function(){
        if($scope.searchParam){
            ghServices.getGithubData($scope.searchParam).success(function(data){
                $location.path('user/' + $scope.searchParam);
            }).error(function(){
                $location.path('/error/'+ $scope.searchParam);
            })
        }
    };
});
