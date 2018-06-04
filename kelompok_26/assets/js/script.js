	
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	
	scotchApp.config(function($routeProvider) {
		$routeProvider

			
			.when('/', {
				templateUrl : 'artikel1.html',
				controller  : 'mainController'
			})

	});

	
	scotchApp.controller('mainController', function($scope) {
		
		$scope.message = 'Everyone come and see how good I look!';
	});

