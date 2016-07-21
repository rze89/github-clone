'use strict'

ghApp.controller('profileCtrl', function profileCtrlController($scope,$routeParams,ghServices,$location) {

    $scope.username = $routeParams.username;
    $scope.repos;
    $scope.user;

    ghServices.getGithubData($scope.username).success(function(data){
        $scope.user = data;
        ghServices.getRepos($scope.user.repos_url).success(function(data){
            $scope.repos = data;
        });
    });

    $scope.goToRepo = function(reponame){
      $location.path('/user/'+$scope.user.login+"/"+ reponame);
    }

});
