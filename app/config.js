ghApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
/*$locationProvider.html5Mode({
  enabled: true,
  requireBase: true
});*/

    $routeProvider.
      when('/', {
        templateUrl: 'views/home.html',
        controller:'mainCtrl'
      }).
      when('/user/:username', {
        templateUrl:'views/profile.html',
        controller:'profileCtrl'
      }).
      when('/user/:username/:reponame', {
        templateUrl:'views/repo.html',
        controller:'repoCtrl'
      }).
      when('/error/:username',{
        templateUrl: 'views/error.html',
        controller:'errorCtrl'
      }).
      when('/compare/:username',{
        templateUrl:'views/compare.html',
        controller:'compareCtrl'
      })
}]);
