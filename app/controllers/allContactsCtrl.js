angular
	.module('ContactsApp')
	.controller('ctrlContacts', ctrlContacts);

	ctrlContacts.$inject = ['ContactService', '$scope'];


	function ctrlContacts(ContactService, $scope){


		$scope.contacts = [];

		ContactService.getContacts().success(function(getcontacts){
		$scope.contacts = getcontacts;	
		});


		$scope.confirmDel = function(id){
			
			ContactService.deleteContact(id).success(function(delcontacts){
				console.log(delcontacts);
				alert('Contact deleted');
				$scope.contacts = delcontacts;			
			});

		};

	}




