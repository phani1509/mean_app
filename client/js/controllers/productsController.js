

app.controller('productsController',['$scope','$route','$rootScope', '$location','$http','$routeParams', function ($scope,$route,$rootScope,$location, $http,$routeParams) {
  console.log($routeParams.tName);
  

  
 var param=$routeParams.tName; 
console.log(param);
$scope.param=param;
 $http.get('/products/'+$routeParams.tName).success(function(response){
  $scope.products=response; $rootScope.arrproducts=response;
  
  }); 
  

  
  $scope.addNewProduct=function(product1){
  $http.post('/products',product1).success(function(response){
  $scope.product=response;
  console.log(response);
 $location.path('/success');
  });};
  
  $scope.editProduct=function(product1){
   $location.path('/editProduct');
   $rootScope.product1=product1;
  };
  
  $scope.updateProduct=function(product1){console.log(product1);
  $http.put('/products/'+product1._id,product1).success(function(response){
 
  console.log(response);
 $location.path('/products');
  });
  
  }
  $scope.viewProduct = function (product) {
$rootScope.producta=product;
 $location.search('tName', null);  $location.path("/productDetails");
  };
  
  $scope.deleteProduct = function (product) {
 console.log(product);
 var id=product._id;console.log(id);
$http.delete('/products/'+product._id).success(function(response){
   console.log(response);
 $route.reload();
  }); 
  };
  
}]);
