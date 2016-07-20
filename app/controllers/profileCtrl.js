'use strict'

ghApp.controller('profileCtrl', function profileCtrlController($http, $scope, ghServices) {

    $scope.searchParam;
    $scope.name = "john";
    $scope.user;
    $scope.repos;

    $scope.searchUser = function (username) {
        ghServices.getGithubData(username, function (data) {
            $scope.user = data;
            $scope.repos = getRepos($scope.user.repos_url);
        });
    }

    function getRepos(url) {
        ghServices.getRepos(url, function (data) {
            $scope.repos = data;
        });
    }
});
