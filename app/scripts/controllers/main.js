'use strict';

/**
 * @ngdoc function
 * @name hangoutApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hangoutApp
 */
angular.module('hangoutApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
