ghApp.factory('ghServices', function ($http, $log) {

    var path = 'https://api.github.com/users/';

    return {
        getGithubData(name, successCB) {
            $http.get(path + name)
                .success(function (data) {
                    return successCB(data);
                }).error(function (data) {
                    $log.warn(data);
                });
        },
        getRepos(url, successCB) {
            $http.get(url)
                .success(function (data) {
                    return successCB(data);
                }).error(function (data) {
                    $log.warn(data);
                });
        }
    }
});
