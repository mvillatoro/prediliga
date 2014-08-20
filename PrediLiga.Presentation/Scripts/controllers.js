'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/

angular.module('app.controllers', [])

    // Path: /
    .controller('HomeCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA Template for Visual Studio';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /about
    .controller('AboutCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | About';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /login
    .controller('LoginCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Sign In';
        // TODO: Authorize a user
        $scope.login = function () {
            $location.path('/my-table');
            return false;
        };
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

        // Path: /forgot-password
    .controller('ForgotPasswordCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Forgot Password';
        $scope.RecoverPassword = function () {
            $scope.ShowMessage = true;
            return false;
        };
    }])
 
        // Path: /register
    .controller('RegisterCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Register';
        $scope.test = function () {
            $location.path('/register');
            return false;
        };
    }])
        // Path: /my-table
    .controller('MyTableCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | My Table';
        $scope.misligas = [];

        $scope.logout = function () {
            $location.path('/');
            return false;
        };

        $scope.addLeague = function(id, league, nextmatch, hits, points) {
            var leagueid = {
                liga: id,
                nombre: league,
                proximo_Fecha: new Date(),
                proximo_Encuentro: nextmatch,
                aciertos: hits,
                puntos: points,
                activo: true
        }
            return leagueid;
        }

        $scope.pushLeague = function (id, league, nextmatch, hits, points) {
            var liston = addLeague(misligas.length + 1, league, nextmatch, hits, points)
            $scope.misligas.push(liston);
            $scope.AddLiga();
        }
    }])
            // Path: /admin-settings
    .controller('AdminSettingsCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Admin Settings';
        
        //Muestra el modo de edicion de liga
        $scope.AddLiga = function () {
            if ($scope.ShowMessage === true) {
                $scope.ShowMessage = false;
            } else {
                $scope.ShowMessage = true;
            }   
        };

        //Modifica cualquier dato de una liga
        $scope.EditLeague = function () {
            if ($scope.ShowEdit === true) {
                $scope.ShowEdit = false;
            } else {
                $scope.ShowEdit = true;
            }
        };

        //modifica cualquier dato de un equipo
        $scope.EditTeam = function () {
            $location.path('/register');
            return false;
        };

        //modifica cualquier dato de un partido
        $scope.EditMatch = function () {
            $location.path('/register');
            return false;
        };
    }])
    // Path: /error/404
    .controller('Error404Ctrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Error 404: Page Not Found';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }]);