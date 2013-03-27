angular.module('mew', []).
  config(['$routeProvider', function($routeProvider){
    $routeProvider.
      when('/', {templateUrl: 'partials/cat-list.html', controller: CatListCtrl}).
      when('/:name', {templateUrl: 'partials/cat-details.html', controller: CatDetailsCtrl}).
      otherwise({redirectTo: '/cats'});
}]);
