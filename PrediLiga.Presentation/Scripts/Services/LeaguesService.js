'use strict';
angular.module('app.services')
    .factory('League', function ($http, Server, $cookieStore) {
        return {
            getAvailableLeagues: function (success, error) {
                $http
                    .get(
                        Server.get() + '/leagues/available', {
                            Authorization: $cookieStore.get('access_token')
                    })
                    .success(function (response) {
                        success(response);
                    })
                    .error(error);
            }
            
        };
    });