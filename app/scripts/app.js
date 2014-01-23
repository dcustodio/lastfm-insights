'use strict';

var app = angular.module('lastfmInsightsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'userService'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
