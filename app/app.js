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


angular.module('ContactsApp').controller('NavBarController',function($scope, $location){

	$scope.getClass = function(path){
		
		if($location.path().substr(0,path.length) === path){
			return true;
		}else{
		return false;
		}
	}

});





	angular.module('ContactsApp').controller('ctrlViewContacts', function($scope, $routeParams, ContactService){

	ContactService.singleContact($routeParams.contactId).success(function(contact){
		$scope.contact = contact;
	});


});

	angular.module('ContactsApp').controller('ctrlAddContacts', function($scope, ContactService){

	$scope.submitForm = function(contact){
		if($scope.ContactForm.$valid){
			ContactService.addContact(contact).success(function(){
				$scope.ContactForm.$setPristine();
				$scope.contact = null;
				alert(' Contact added!');
			});
		}

	}

});

angular.module('ContactsApp').controller('ctrlEditContacts', function($scope, $routeParams, ContactService){

	ContactService.singleContact($routeParams.contactId).success(function(contact){
		$scope.contact = contact;
		$scope.id = $routeParams.contactId;
	});

	$scope.submitForm = function(contact){
		if($scope.ContactForm.$valid){
			ContactService.editContact(contact,$scope.id).success(function(){
				console.log(contact);
				$scope.ContactForm.$setPristine();
				$scope.contact = null;
				alert(' Contact Modified');
			});
		};

	};


	
});

})();

