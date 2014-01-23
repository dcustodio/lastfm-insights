/**
 * Created by David on 23/01/14.
 */
var services = angular.module('userService', []).
    value('version', '0.1');

services.service('userService', ['$http', '$q', function ($http, $q) {
    var service = {};

    //http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=rj&api_key=1a19451013ef6665afd0a24e64422227&format=json
    //Restangular
    var User = $resource('http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=rj&api_key=1a19451013ef6665afd0a24e64422227&format=json');
    var user = User.get( function() {

    });

    return user;

    var getUser = function (userid) {
        var deferred = $q.defer();

        $http.get('/api/user/'+userid).
            success(function (data) {
                deferred.resolve(data);
            }).
            error(function (error) {
                deferred.reject(error.message);
            });

        return deferred.promise;
    };

    service.getUserById = function (userid) {
        return getUser(userid);
    }

    return service;
}]);


