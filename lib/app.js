
var demoApp = angular.module('demoApp',['ngRoute','controller'])
		
	.config(function ($routeProvider){
			$routeProvider
			.when('/view1',
					{
						controller: 'PatientCtrl',
						templateUrl: 'Partials/view1.html'
					})
			.when('/view2',
				{
						controller: 'SimpleController',
						templateUrl: 'Partials/view2.html'
					})
			.when('/view3',
				{
						controller: 'SimpleController',
						templateUrl: 'Partials/view3.html'
					})
			.otherwise({ redirectTo: '/view1'});
				})
			