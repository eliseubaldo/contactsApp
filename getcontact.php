<?php

$id = $_GET['id'];
//$data = "contacts.json";
$data = file_get_contents('contacts.json');
$tempArray = json_decode($data, true);
$jsonData = json_encode($tempArray[$id]);
//print_r();
echo $jsonData;
?>



