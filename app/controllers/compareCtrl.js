ghApp.controller('compareCtrl', function compareCtrlController($scope, ghServices, $routeParams){
  //$scope.user1name = $location.search('user1');
  //$scope.user2name = $location.search('user2');

  $scope.user1name = $routeParams.username;
  //console.log($location.search($scope.username));
  $scope.user2name;
  $scope.user;
  $scope.didCompare;

  function repoCount(repos){
    var count = 0;
    angular.forEach(repos, function(item){
      count++;
    });
    return count;
  }

  ghServices.getGithubData($scope.user1name).success(function(data){
      $scope.user = data;
      ghServices.getRepos($scope.user.repos_url).success(function(data){
          $scope.repos = data;
          $scope.user1RepoTotal = repoCount($scope.repos);
      });

  });
  $scope.clearUser = function(user){
    $scope.user2 = null;
    $scope.searchParam = "";
  }
  $scope.searchUser = function(){
    ghServices.getGithubData($scope.searchParam).success(function(data){
      $scope.user2 = data;
      ghServices.getRepos($scope.user2.repos_url).success(function(data){
          $scope.user2Repos = data;
          $scope.user2RepoTotal = repoCount($scope.user2Repos);
      });
    }).error(function(data){
        $scope.error = "Sorry, we couldn't find a user by that name."
    })
  }

});
