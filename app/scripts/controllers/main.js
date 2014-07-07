'use strict';

app.controller('MainCtrl',['$scope','userService', function ($scope,userService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.tags = [];
//$scope.artists = userService.getArtists();
    $scope.getTags = function(){
        $scope.tags = userService.getTags($scope.username);
    }
  }]);
