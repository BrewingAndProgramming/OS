angular.module('MyApp')
  .controller('HeaderCtrl', function($scope, $location, $window) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
    
    $scope.isAuthenticated = function() {
    };
    
    $scope.logout = function() {
      delete $window.localStorage.user;
      $location.path('/');
    };
  });
