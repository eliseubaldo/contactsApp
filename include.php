<?php

$data[] = "Eliseu";





$inp = file_get_contents('contacts.json');
$tempArray = json_decode($inp, true);
array_push($tempArray, $data);
$jsonData = json_encode($tempArray);
file_put_contents('contacts.json', $jsonData);

?>

