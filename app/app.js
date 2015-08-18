
var app = angular.module('ContactsApp', ['ngRoute']);

app.config(function($routeProvider){
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


app.controller('NavBarController',function($scope, $location){

	$scope.getClass = function(path){
		
		if($location.path().substr(0,path.length) === path){
			return true;
		}else{
		return false;
		}
	}

});



app.controller('ctrlContacts', function($scope, ContactService){
	ContactService.getContact().success(function(contacts){
		$scope.contacts = contacts;
	}) 

});

app.controller('ctrlViewContacts', function($scope){


});

app.controller('ctrlAddContacts', function($scope, ContactService){

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

app.controller('ctrlEditContacts', function($scope){


});