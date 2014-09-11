'use strict';
angular.module('app.controllers')
    .controller('LoginCtrl', [
        '$scope', '$location', '$window', 'Account','Auth', function($scope, $location, $window, Account,Auth) {
            $scope.$root.title = 'AngularJS SPA | Sign In';
            // TODO: Authorize a user
            $scope.user = {

            };

            $scope.login = function() {
                Auth.login($scope.user, function(response) {
                    console.log(response);
                }, function(error) {

                });
            };
            $scope.$on('$viewContentLoaded', function() {
                $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
            });
        }
    ]);