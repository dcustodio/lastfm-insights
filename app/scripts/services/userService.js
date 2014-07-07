/**
 * Created by David on 23/01/14.
 */
'use strict';

var services = angular.module('lastfmInsightsApp.services', []).
    value('version', '0.1');

//get user.getWeeklyTrackChart
//get top tags
services.service('userService', ['$http', '$q', function ($http, $q) {
    var service = {};
    var get_params = { method:"user.gettopartists",
        user:"rj",
        api_key:"1a19451013ef6665afd0a24e64422227",
        format:"jon" };
/*
    service.getArtists = function(){
        Restangular.all('accounts');

        console.log("getting artists");
        return Restangular.all().getList(get_params);
    } */
    service.getWeeklyTrackChart = function (username) {
        var deferred = $q.defer();

        $http.get('http://ws.audioscrobbler.com/2.0/?method=user.getweeklytrackchart&user='+username+'&api_key=1a19451013ef6665afd0a24e64422227&format=json').
            success(function (data) {
                deferred.resolve(data);
            }).
            error(function (error) {
                deferred.reject(error.message);
            });

        return deferred.promise;
    };

    service.getTags = function(username) {

        var tags = [];
        service.getWeeklyTrackChart(username).then(function(res){

            res.weeklytrackchart.track.forEach(function(tr) {
                service.getArtistTopTags(tr.artist['#text']).then(function(tag){
                    tag.toptags.tag.forEach(function(t){
                        tags.push(t);
                    })
                });
            });
            return tags;
        });



    };

service.getArtistTopTags = function(artist) {
    var deferred = $q.defer();

    $http.get('http://ws.audioscrobbler.com/2.0/?method=artist.gettoptags&artist='+artist+'&api_key=1a19451013ef6665afd0a24e64422227&format=json').
        success(function (data) {
            deferred.resolve(data);
        }).
        error(function (error) {
            deferred.reject(error.message);
        });

    return deferred.promise;
}


//return service.artists = artists;



    //http://ws.audioscrobbler.com/2.0/?=&&&
    //Restangular
    //var User = $resource('http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=rj&api_key=1a19451013ef6665afd0a24e64422227&format=json');
    /*var user = User.get( function() {

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
    }*/



    return service;
}]);


