var app = angular.module('ProctusApp', ['ngRoute']);

app.config(
  function($routeProvider,$locationProvider,$httpProvider) {
    $routeProvider
	/*.when('/addProduct', {
        templateUrl: '../addProduct.html',
        controller: 'meetupsController'
    })	.when('/addProRes', {
        templateUrl: '../addProRes.html',
        controller: 'meetupsController'
    })*/.when('/success', {
        templateUrl: '../success.html',
        controller: 'meetupsController'
    })
	.when('/', {
        templateUrl: 'login.html',
controller: 'LoginCtrl'
    })
	.when('/home', {
        templateUrl: 'home.html',
       controller: 'homeCtrl' ,
	 resolve: {
              loggedin: checkLoggedin
          }
    })
	.when('/addNewProduct', {
        templateUrl: '../addNewProduct.html',
        controller: 'productsController'
    })
	.when('/editProduct', {
        templateUrl: '../editProduct.html',
        controller: 'productsController'
    })	
	.when('/register', {
        templateUrl: 'register.html',
        controller: 'RegisterCtrl'
    })
		.when('/products', {
        templateUrl: 'products.html',
        controller: 'productsController',
		 resolve: {
              loggedin: checkLoggedin
          }})/*.when('/products/:param', {
        templateUrl: 'products.html',
        controller: 'productsController',
		 resolve: {
              loggedin: checkLoggedin
          }
    })*/.when('/productDetails', {
        templateUrl: 'productDetails.html',
        controller: 'productsController',
		 resolve: {
              loggedin: checkLoggedin
          }
    })

	.otherwise({
        redirectTo: '/'
    });
	});


var checkLoggedin = function($q, $timeout, $http, $location, $rootScope)
{
    var deferred = $q.defer();

    $http.get('/loggedin').success(function(user)
    {
        $rootScope.errorMessage = null;
        // User is Authenticated
        if (user !== '0')
        {
            $rootScope.currentUser = user;
            deferred.resolve();
        }
        // User is Not Authenticated
        else
        {
            $rootScope.errorMessage = 'You need to log in.';
            deferred.reject();
            $location.url('/main-page');
        }
    });
    
    return deferred.promise;
};

app.controller("homeCtrl", function($scope, $http, $location, $rootScope){
    $scope.logout = function(){
        $http.post("/logout")
        .success(function(){
            $rootScope.currentUser = null;
            $location.url("/main-page");
        });
    };
});

















