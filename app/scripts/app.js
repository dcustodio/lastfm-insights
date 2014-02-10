'use strict';

var app = angular.module('lastfmInsightsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'restangular',
  'lastfmInsightsApp.services'
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
app.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://ws.audioscrobbler.com/2.0/');
    RestangularProvider.setRequestSuffix('.json');
});