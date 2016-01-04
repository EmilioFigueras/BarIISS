'use strict';

/**
 * @ngdoc function
 * @name barApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the barApp
 */
angular.module('barApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
