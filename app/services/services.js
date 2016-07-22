ghApp.factory('ghServices', function ($http, $log) {

    var userPath = 'https://api.github.com/users/';
    var repoPath = 'https://api.github.com/repos/';

    return {
        getGithubData(name) {
          return $http.get(userPath + name, {cache:true});
        },
        getRepos(url) {
          return $http.get(url, {cache:true});
        },
        getRepo(username, reponame){
          return $http.get(repoPath + username + '/' + reponame, {cache:true});
        },
        getFollowing(username){
          return $http.get(userPath + username + '/' + 'following', {cache: true});
        },
        getLanguages(url){
          return $http.get(url, {cache:true});
        }
    }
});
