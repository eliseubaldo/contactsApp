(function(){
	'use strict';

angular
	.module('ContactsApp')
	.factory('ContactService', function($http){
	
	var factory = {};

	factory.getContacts = function(){

		//return $http.get('http://192.168.0.1:12345/contactsApp-master/getcontacts.php', id)
		
		return $http.get('getcontact.php');

	}

	factory.singleContact = function(id){
		
		return $http.get('getcontact.php?id=' + id);
	
	}

	factory.deleteContact = function(id){
		
		return $http.get('deletecontact.php?id=' + id);
			
	}


	factory.addContact = function(objContact){
		console.log(objContact);
		return $http.post('include.php',objContact)

	}

	factory.editContact = function(objContact, id){
		console.log(objContact);
		return $http.post('include.php?id='+id,objContact)

	}

	return factory;

});

})();



