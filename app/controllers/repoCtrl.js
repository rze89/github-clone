ghApp.controller('repoCtrl', function repoCtrlController($routeParams, $scope, ghServices){

    $scope.reponame = $routeParams.reponame;
    $scope.username = $routeParams.username;

    $scope.repo;

    ghServices.getRepo($scope.username,$scope.reponame).success(function(data){
        $scope.repo = data;
    })
});
