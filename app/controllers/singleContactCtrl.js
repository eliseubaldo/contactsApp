(function(){
	'use strict';

angular
	.module('ContactsApp')
	.controller('ctrlViewContacts', ctrlViewContacts);

	ctrlViewContacts.$inject = ['$scope', '$routeParams', 'ContactService']

	function ctrlViewContacts ($scope, $routeParams, ContactService){

		ContactService.singleContact($routeParams.contactId)
		.then(function(response){
			$scope.contact = response.data;
		})
		.catch(function(response){
			alert('Error:', response.status);
		});

	}


})();