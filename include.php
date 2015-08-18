<?php

// funcionando mas com escape chars no json final

$data = file_get_contents('php://input');
$inp = file_get_contents('contacts.json');
$tempArray = json_decode($inp, true);
array_push($tempArray, $data);
$jsonData = json_encode($tempArray);
file_put_contents('contacts.json', $jsonData);


//works
//$data = file_get_contents('php://input');
//file_put_contents('contacts.json', $data);
?>
