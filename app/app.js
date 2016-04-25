(function(){
	'use strict';

	angular
		.module('ContactsApp', ['ngRoute']);

	angular
		.module('ContactsApp')
		.config(function($routeProvider){
			$routeProvider.when('/all-contacts',
			{
				controller:'ctrlContacts',
				templateUrl:'template/allcontacts.html'

			})
			.when('/view-contacts/:contactId',
			{
				controller:'ctrlViewContacts',
				templateUrl:'template/viewContact.html'
			})
			.when('/add-contacts',
			{
				controller:'ctrlAddContacts',
				templateUrl:'template/manageContact.html'
			})
			.when('/edit-contacts/:contactId',
			{
				controller:'ctrlEditContacts',
				templateUrl:'template/manageContact.html'
			})
			.otherwise({redirectTo:'all-contacts'})

		});


		angular
		.module('ContactsApp')
		.controller('NavBarController',function($scope, $location){

			$scope.getClass = function(path){
				
				if($location.path().substr(0,path.length) === path){
					return true;
				}else{
				return false;
				}
			}

		});




})();

