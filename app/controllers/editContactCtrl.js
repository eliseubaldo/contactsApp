(function(){
	'use strict';


angular
	.module('ContactsApp')
	.controller('ctrlEditContacts', ctrlEditContacts);

	ctrlEditContacts.$inject = ['$scope', '$routeParams', 'ContactService'];

	function ctrlEditContacts ($scope, $routeParams, ContactService){

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

	}

	
})();

	
