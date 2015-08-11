<?php

$data = "contacts.json";
header('Content-Type: application/json');
echo json_encode($data);

?>