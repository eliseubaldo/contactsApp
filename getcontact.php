<?php

$id = $_GET['id'];

if ($id) {

	//$data = "contacts.json";
	$data = file_get_contents('contacts.json');
	$tempArray = json_decode($data, true);
	$jsonData = json_encode($tempArray[$id]);
	//print_r();
	echo $jsonData;
	
  
} else {
	
	//$data = "contacts.json";
	$data = file_get_contents('contacts.json');
	$tempArray = json_decode($data, true);
	$jsonData = json_encode($tempArray);
	//print_r();
	echo $jsonData;

}


?>



