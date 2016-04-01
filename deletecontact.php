<?php

$id = $_GET['id'];
//$data = "contacts.json";
$data = file_get_contents('contacts.json');
$tempArray = json_decode($data, true);

array_splice($tempArray, $id, 1);
$jsonData = json_encode($tempArray);
file_put_contents('contacts.json', $jsonData);
echo file_get_contents('contacts.json');

?>



