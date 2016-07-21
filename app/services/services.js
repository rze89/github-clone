ghApp.factory('ghServices', function ($http, $log) {

    var userPath = 'https://api.github.com/users/';
    var repoPath = 'https://api.github.com/repos/'

    return {
        getGithubData(name) {
          return $http.get(userPath + name);

        },
        getRepos(url) {
          return $http.get(url);
        },
        getRepo(username, reponame){
          return $http.get(repoPath + username + '/' + reponame);
        }
    }
});
