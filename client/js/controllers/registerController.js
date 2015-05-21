var reg= app.controller("RegisterCtrl", function($scope, $http, $location, $rootScope){
    $scope.register = function(user){
        console.log(user);
        /*if(user.password != user.password2 || !user.password || !user.password2)
        {
            $rootScope.message = "Your passwords don't match";
        }
        else
        {}*/
            $http.post("/register", user)
            .success(function(response){
                console.log(response);
                if(response != null)
                {
                    $rootScope.currentUser = response;
                    $location.url("/success");
                }
            });

		};
		});
		reg.directive('validPasswordC', function() {
  return {
    require: 'ngModel',
    scope: {

      reference: '=validPasswordC'

    },
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue, $scope) {

        var noMatch = viewValue != scope.reference
        ctrl.$setValidity('noMatch', !noMatch)
      });

      scope.$watch("reference", function(value) {;
        ctrl.$setValidity('noMatch', value === ctrl.$viewValue);

      });
    }
  }
});

