'use strict';

/**
 * @ngdoc overview
 * @name hangoutApp
 * @description
 * # hangoutApp
 *
 * Main module of the application.
 */
var app = angular
  .module('hangoutApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
<<<<<<< HEAD
        controller: 'LoginController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
=======
        controller: 'loginController'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardController'
>>>>>>> c6ee3c188a2bd691b8d7a98ed1a8dd1cbbb4db8b
      })
      .otherwise({
        redirectTo: '/'
      });
  });
