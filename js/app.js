'use strict';

// Declare app level module which depends on filters, and services
var concert = angular.module('concert', ['ngRoute','sequencer']);
concert.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'js/sequencer/sequencer.html', controller: 'sequencerController'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
