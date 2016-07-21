'use strict'

ghApp.controller('profileCtrl', function profileCtrlController($scope,$routeParams,ghServices,$location) {

    $scope.username = $routeParams.username;
    $scope.repos;
    $scope.user;
    $scope.totalStars;
    $scope.totalFollowing;

    ghServices.getGithubData($scope.username).success(function(data){
        $scope.user = data;
        ghServices.getRepos($scope.user.repos_url).success(function(data){
            $scope.repos = data;
            $scope.totalStars = getTotalStars($scope.repos);
        });
    }).error(function(data){
        $location.path('/error/'+ $scope.username);
    });

    ghServices.getFollowing($scope.username).success(function(data){
        var temp = data;
        $scope.totalFollowing = Object.keys(temp).length;
    });

    function getTotalStars(repos){
      var count = 0;
      angular.forEach(repos, function(repo){
        if(repo.stargazers_count > 0){
          count += repo.stargazers_count;
        }
      });
      return count;
    };



    $scope.goToRepo = function(reponame){
      $location.path('/user/'+$scope.user.login+"/"+ reponame);
    }

});
