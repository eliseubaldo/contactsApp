(function(){
	'use strict';


angular
	.module('ContactsApp')
	.controller('ctrlAddContacts', ctrlAddContacts);

	ctrlAddContacts.$inject = ['$scope', 'ContactService'];

	function ctrlAddContacts ($scope, ContactService){

		$scope.submitForm = function(contact){
			if($scope.ContactForm.$valid){
				ContactService.addContact(contact).success(function(){
					$scope.ContactForm.$setPristine();
					$scope.contact = null;
					alert(' Contact added!');
				});
			}

		}

	}

})();	

