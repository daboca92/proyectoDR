'use strict';

/**
 * @ngdoc function
 * @name proyectoDrApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the proyectoDrApp
 */

app.controller('PortfolioController', ['$scope', function($scope) {
  $scope.apps = [ 
	  { 
	    icon: '../../images/yeoman.png', 
	    title: 'MOVE', 
	    developer: 'MOVE, Inc.', 
	    price: 0.99 
	  }, 
	  { 
	    icon: '../../images/yeoman.png', 
	    title: 'Shutterbugg', 
	    developer: 'Chico Dusty', 
	    price: 2.99 
	  },
	  {
	    icon: '../../images/yeoman.png',
	    title: 'Gameboard',
	    developer: 'Armando P.',
	    price: 1.99
	  },
	  {
	    icon: '../../images/yeoman.png',
	    title: 'Forecast',
	    developer: 'Forecast',
	    price: 1.99
	  }
	];
}]);