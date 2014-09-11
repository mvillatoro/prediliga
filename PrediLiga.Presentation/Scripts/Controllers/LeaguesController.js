'use strict';
angular.module('app.controllers')
    .controller('LeaguesCtrl', [
        '$scope', '$location', '$window', 'League', function ($scope, $location, $window, League) {
            $scope.$root.title = 'AngularJS SPA | Leagues';

            $scope.availableLeagues = [];

        $scope.loadLeagues = function() {
            League.getAvailableLeagues(function(availableLeagues) {
                $scope.availableLeagues = availableLeagues;
            }, function(error) {
                alert('error loading available leagues');
            });
        };

            $scope.$on('$viewContentLoaded', function() {
                $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
            });
        }
    ]);