app.factory('ContactService', function($http){
	
	var factory = {};

	factory.getContact = function(id){

	//return $http.get('http://192.168.0.1:12345/contactsApp-master/getcontacts.php', id)
	
	return $http.get('contacts.json')

	}

	factory.singleContact = function(id){
		
	return $http.get('getcontact.php?id=' + id);
	
	}


	factory.addContact = function(objContact){
		//console.log(objContact);
		return $http.post('include.php',objContact)

	}

	return factory;

})