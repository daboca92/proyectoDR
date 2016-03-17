'use strict';

/**
 * @ngdoc overview
 * @name proyectoDrApp
 * @description
 * # proyectoDrApp
 *
 * Main module of the application.
 */
var app = angular
  .module('proyectoDrApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioController',
        controllerAs: 'portfolio'
      })
      .when('/about', {
        templateUrl: 'views/portfolio.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
