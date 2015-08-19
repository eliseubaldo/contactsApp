<?php

$id = $_GET['id'];
echo $id;
$data = "contacts.json";
//$data = file_get_contents('contacts.json');
$tempArray = json_decode($data, true);
echo $tempArray[$id]['name'];
?>



