app.factory('ContactService', function($http){
	
	var factory = {};

	factory.getContact = function(id){
		return $http.get('http://127.0.0.1:12345/contacts-Angular/getcontacts.php', id)

	}



	factory.addContact = function(objContact){
		return $http.get('http://127.0.0.1:12345/contacts-Angular/include.php', JSON.stringify(objContact))

	}

	return factory;

})