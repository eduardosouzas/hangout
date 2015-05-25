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
        controller: 'loginController'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardController'
      })
      .when('/pedidos', {
        templateUrl: '../views/pedidos.html',
        controller: 'pedidosController'
      })
      .when('/clientes', {
        templateUrl: '../views/cliente.html',
        controller: 'clienteController'
      })
      .when('/produtos', {
        templateUrl: '../views/produto.html',
        controller: 'produtoController'
      })
      .when('/fornecedores', {
        templateUrl: '../views/fornecedor.html',
        controller: 'fornecedorController'
      })
      .when('/financeiro', {
        templateUrl: '../views/financeiro.html',
        controller: 'financeiroController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
