function CatCtrlList($scope, $http) {
  $http.get('./cats.json').success(function(data){
    $scope.cats = data;
  });

  $scope.orderProp = 'name';
}