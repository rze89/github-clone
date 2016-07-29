ghApp.controller('compareCtrl', function compareCtrlController($scope, ghServices, $routeParams) {


    $scope.user1name = $routeParams.username;
    $scope.didCompare;

    ghServices.getGithubData($scope.user1name).success(function(data) {

        $scope.user1Obj = {
            login: "",
            stars: "",
            repoCount: "",
            following: "",
            repos: "",
            winner: false
        };

        $scope.user = data;
        ghServices.getRepos($scope.user.repos_url).success(function(data) {
            $scope.user1Obj.repos = data;
            $scope.user1Obj.login = $scope.user.login;
            $scope.user1Obj.repoCount = repoCount($scope.user1Obj.repos);
            $scope.user1Obj.stars = getTotalStars($scope.user1Obj.repos);
        });
        ghServices.getFollowing($scope.user.login).success(function(data) {
            var temp = data;
            $scope.user1Obj.following = Object.keys(temp).length;
        });

    });

    $scope.clearUser = function() {
        $scope.user2 = null;
        $scope.searchParam = "";
        $scope.didCompare = false;
        $scope.error = "";
        $scope.user1Obj.winner = false;
    };

    $scope.compare = function(user1, user2) {
        $scope.didCompare = true;
        $scope.tie = false;
        var proplist = ["repoCount","stars","following"];
        var user1Count= 0;
        var user2Count = 0;

        angular.forEach(proplist, function(item){
          if(user1[item] > user2[item]){
            user1Count++;
          }
          else if(user2[item] > user1[item]){
            user2Count++;
          }
        });
        if(user1Count > user2Count){
          user1.winner = true;
        }
        else if(user2Count > user1Count){
          user2.winner = true;
        }
        else{
          $scope.tie = true;
        }
    };

    $scope.searchUser = function() {

        $scope.user2Obj = {
            login: "",
            stars: "",
            repoCount: "",
            following: "",
            repos: "",
            winner: false
        };

        ghServices.getGithubData($scope.searchParam).success(function(data) {
            $scope.user2 = data;
            ghServices.getRepos($scope.user2.repos_url).success(function(data) {
                $scope.user2Obj.repos = data;
                $scope.user2Obj.login = $scope.user2.login;
                $scope.user2Obj.repoCount = repoCount($scope.user2Obj.repos);
                $scope.user2Obj.stars = getTotalStars($scope.user2Obj.repos);
            });
            ghServices.getFollowing($scope.user2.login).success(function(data) {
                var temp = data;
                $scope.user2Obj.following = Object.keys(temp).length;
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
