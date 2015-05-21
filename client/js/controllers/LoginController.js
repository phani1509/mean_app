app.controller("LoginCtrl", function($scope, $http, $location, $rootScope){
    $scope.login = function(user){
	
	
        console.log(user);
        $http.post("/login", user)
        .success(function(response){
            console.log(response);
            $rootScope.currentUser = response;
            $location.url("/home");
        })
		.error(function(response,status){
		      console.log(response,status);
		$scope.errmsg="Invalid Credentials!!";
		});
    }
});


