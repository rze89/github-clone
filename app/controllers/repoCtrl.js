ghApp.controller('repoCtrl', function repoCtrlController($routeParams, $scope, ghServices) {

    $scope.reponame = $routeParams.reponame;
    $scope.username = $routeParams.username;

    $scope.repo;
    $scope.languages = [];

    function makeList(obj) {
        var language;
        var total = 0;

        for (var i in obj) {
            total += obj[i];
        }

        var list = [];
        for (var o in obj) {
            language = {
                name: o,
                percent: obj[o] / total
            }
            language.percent = language.percent.toFixed(2) * 100;
            list.push(language);
        }
        return list;
    }


    ghServices.getRepo($scope.username, $scope.reponame).success(function(data) {
        $scope.repo = data;

        ghServices.getLanguages($scope.repo.languages_url).success(function(data) {
            var temp = data;
            $scope.languages = makeList(temp);
        });
    });
});
