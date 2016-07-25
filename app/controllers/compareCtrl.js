ghApp.controller('compareCtrl', function compareCtrlController($scope, ghServices, $routeParams) {
    //$scope.user1name = $location.search('user1');
    //$scope.user2name = $location.search('user2');

    $scope.user1name = $routeParams.username;
    //console.log($location.search($scope.username));
    $scope.user;
    $scope.user2name;
    $scope.didCompare;

    ghServices.getGithubData($scope.user1name).success(function(data) {
        $scope.user = data;
        ghServices.getRepos($scope.user.repos_url).success(function(data) {
            $scope.user1Repos = data;
            $scope.user1RepoTotal = repoCount($scope.user1Repos);
            $scope.user1TotalStars = getTotalStars($scope.user1Repos);
        });
        ghServices.getFollowing($scope.user.login).success(function(data) {
            var temp = data;
            $scope.user1totalFollowing = Object.keys(temp).length;
        });

    });

    $scope.clearUser = function(user) {
        $scope.user2 = null;
        $scope.searchParam = "";
        $scope.didCompare = false;
        $scope.error = "";
    };

    $scope.compare = function(user1, user2) {
        $scope.didCompare = true;
    };

    $scope.searchUser = function() {
        ghServices.getGithubData($scope.searchParam).success(function(data) {
            $scope.user2 = data;
            ghServices.getRepos($scope.user2.repos_url).success(function(data) {
                $scope.user2Repos = data;
                $scope.user2RepoTotal = repoCount($scope.user2Repos);
                $scope.user2TotalStars = getTotalStars($scope.user2Repos);
            });
            ghServices.getFollowing($scope.user2.login).success(function(data) {
                var temp = data;
                $scope.user2totalFollowing = Object.keys(temp).length;
            });
        }).error(function(data) {
            $scope.error = "Sorry, we couldn't find a user by that name."
        });
    };

    function getTotalStars(repos) {
        var count = 0;
        angular.forEach(repos, function(repo) {
            if (repo.stargazers_count > 0) {
                count += repo.stargazers_count;
            }
        });
        return count;
    };

    function repoCount(repos) {
        var count = 0;
        angular.forEach(repos, function(item) {
            count++;
        });
        return count;
    };

});
