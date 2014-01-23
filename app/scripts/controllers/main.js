'use strict';

app.controller('MainCtrl',['$scope','userService', function ($scope, userService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.artists = userService.user;
  }]);
