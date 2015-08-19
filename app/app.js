
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
	ContactService.getContacts().success(function(contacts){
		$scope.contacts = contacts;
	})


});

app.controller('ctrlViewContacts', function($scope, $routeParams, ContactService){

	ContactService.singleContact($routeParams.contactId).success(function(contact){
		$scope.contact = contact;
	});

	$scope.confirmDel = function(id){
		alert('hi:' + id);
	};

	
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

app.controller('ctrlEditContacts', function($scope, $routeParams, ContactService){

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