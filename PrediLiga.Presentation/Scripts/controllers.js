﻿'use strict';

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
        $scope.login = function (user, password) {

            $scope.IsUser(user, password);
            return false;
        };

        var allUsers = $scope.users;

        $scope.IsUser = function (user, password)
        {
            for (i = 0; i < allUsers.length ; i++) {
                if (user === allUsers[i]) {
                    if (password === allUsers[i]) {
                        $location.path('/my-table');
                        return true;
                    }
                }
            }
            return false;
        }
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
        $scope.users= [];

        $scope.adduser = function (name, lastName, userName, email, password) {
            var user = {
                nombre: name,
                apellido: lastName,
                usuario: userName,
                correo: email,
                password: password,
                activo: true
            }
        }
        $scope.pushUser = function (first_name, last_name, display_name, email, password) {
            var datos = $scope.adduser(first_name, last_name, display_name, email, password);
            $scope.users.push(datos);
            $location.path('/login');
        }
    }])
        // Path: /my-table
    .controller('MyTableCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | My Table';
        $scope.misligas = [];
        $scope.logout = function () {
            $location.path('/');
            return false;
        };
    }])
            // Path: /admin-settings
    .controller('AdminSettingsCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Admin Settings';

        $scope.misligas = [];

        var liga1 = {
            id: 1,
            nombre: "Inglesa",
            proximo_Fecha: new Date(),
            proximo_Encuentro: "Man U vs Arsenal",
            aciertos: 4,
            puntos: 6
        };
        $scope.misligas.push(liga1);

        $scope.addLeague = function (id, league, nextmatch, hits, points) {
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
            var ides= $scope.misligas.length + 1;
            var liston = $scope.addLeague(ides, league, nextmatch, hits, points);
            $scope.misligas.push(liston);
            $scope.AddLiga();
        }
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

            // Path: /forgot-password
    .controller('PredictAGoalCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Forgot Password';

    }])
            // Path: /leagues
    .controller('LeaguesCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Leagues';

    }])

    // Path: /error/404
    .controller('Error404Ctrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Error 404: Page Not Found';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }]);