﻿'use strict';

// Declares how the application should be bootstrapped. See: http://docs.angularjs.org/guide/module
angular.module('app', ['ui.router', 'app.filters', 'app.services', 'app.directives', 'app.controllers'])

    // Gets executed during the provider registrations and configuration phase. Only providers and constants can be
    // injected here. This is to prevent accidental instantiation of services before they have been fully configured.
    .config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {

        // UI States, URL Routing & Mapping. For more info see: https://github.com/angular-ui/ui-router
        // ------------------------------------------------------------------------------------------------------------

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/views/index',
                controller: 'HomeCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/views/about',
                controller: 'AboutCtrl'
            })
            .state('login', {
                url: '/login',
                layout: 'basic',
                templateUrl: '/views/login',
                controller: 'LoginCtrl'
            })
            .state('forgot-password', {
                url: '/forgot-password',
                layout: 'basic',
                templateUrl: '/views/forgot-password',
                controller: 'ForgotPasswordCtrl'
            })
            .state('register', {
                url: '/register',
                layout: 'basic',
                templateUrl: '/views/register',
                controller: 'RegisterCtrl'
            })
            .state('my-table', {
                url: '/my-table',
                layout: 'basic',
                templateUrl: '/views/my-table',
                controller: 'MyTableCtrl'
            })
             .state('admin-settings', {
                url: '/admin-settings',
                layout: 'basic',
                templateUrl: '/views/admin-settings',
                controller: 'AdminSettingsCtrl'
            })
            .state('predict-a-goal', {
                url: '/predict-a-goal',
               layout: 'basic',
               templateUrl: '/views/predict-a-goal',
               controller: 'PredictAGoalCtrl'
            })
            .state('leagues', {
                url: '/leagues',
                layout: 'basic',
                templateUrl: '/views/leagues',
                controller: 'LeaguesCtrl'
            })
            .state('calendar', {
                url: '/calendar',
                layout: 'basic',
                templateUrl: '/views/calendar',
                controller: 'CalendarCtrl'
            })
            .state('otherwise', {
                url: '*path',
                templateUrl: '/views/404',
                controller: 'Error404Ctrl'
            });

        $locationProvider.html5Mode(true);

    }])

    // Gets executed after the injector is created and are used to kickstart the application. Only instances and constants
    // can be injected here. This is to prevent further system configuration during application run time.
    .run(['$templateCache', '$rootScope', '$state', '$stateParams', function ($templateCache, $rootScope, $state, $stateParams) {

        // <ui-view> contains a pre-rendered template for the current view
        // caching it will prevent a round-trip to a server at the first page load
        var view = angular.element('#ui-view');
        $templateCache.put(view.data('tmpl-url'), view.html());

        // Allows to retrieve UI Router state information from inside templates
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.$on('$stateChangeSuccess', function (event, toState) {

            // Sets the layout name, which can be used to display different layouts (header, footer etc.)
            // based on which page the user is located
            $rootScope.layout = toState.layout;
        });
    }]);