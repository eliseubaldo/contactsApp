(function(){
	'use strict';


angular
	.module('ContactsApp')
	.controller('ctrlEditContacts', ctrlEditContacts);

	ctrlEditContacts.$inject = ['$scope', '$routeParams', 'ContactService'];

	function ctrlEditContacts ($scope, $routeParams, ContactService){

		ContactService.singleContact($routeParams.contactId)
		.then(function(response){
		$scope.contact = response.data;
		$scope.id = $routeParams.contactId;
		});

		$scope.submitForm = function(contact){
			if($scope.ContactForm.$valid){
				ContactService.editContact(contact,$scope.id)
				.then(function(response){
					console.log(contact);
					$scope.ContactForm.$setPristine();
					$scope.contact = null;
					alert(' Contact Modified');
				})
				.catch(function(response){
					alert('Error:', response.status, response.data)
				});
			};

		};

	}

	
})();

	
