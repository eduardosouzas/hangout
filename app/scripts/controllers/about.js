'use strict';

/**
 * @ngdoc function
 * @name hangoutApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hangoutApp
 */
angular.module('hangoutApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
