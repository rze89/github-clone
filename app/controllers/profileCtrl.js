'use strict'

ghApp.controller('profileCtrl', function profileCtrlController($scope,$routeParams,ghServices,$location) {

    $scope.username = $routeParams.username;
    $scope.repos;
    $scope.user;
    $scope.totalStars;
    $scope.totalFollowing;


    ghServices.getGithubData($scope.username).success(function(data){
        $scope.user = data;
        $scope.link = $scope.user.login
        ghServices.getRepos($scope.user.repos_url).success(function(data){
            $scope.repos = data;
            $scope.totalStars = getTotalStars($scope.repos);
        });
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

    $scope.goToCompare = function(){
      //$location.path('/compare').search('user1', $scope.user.login);
      $location.path('/compare/' + $scope.user.login)
    }

    $scope.goToRepo = function(reponame){
      $location.path('/user/'+$scope.user.login+"/"+ reponame);
    }

});
