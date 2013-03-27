function CatListCtrl($scope, $http) {
  $http.get('katz/cats.json').success(function(data){
    $scope.cats = data;
  });

  $scope.orderProp = 'name';
};

function CatDetailsCtrl($scope, $routeParams, $http){
  $http.get('katz/' + $routeParams.name + '.json').success(function(data){
    console.log($routeParams);
    $scope.cat = data;
  });
};