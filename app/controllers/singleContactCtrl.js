(function(){
	'use strict';

angular
	.module('ContactsApp')
	.controller('ctrlViewContacts', ctrlViewContacts);

	ctrlViewContacts.$inject = ['$scope', '$routeParams', 'ContactService']

	function ctrlViewContacts ($scope, $routeParams, ContactService){

		ContactService.singleContact($routeParams.contactId).success(function(contact){
			$scope.contact = contact;
		});

	}


})();