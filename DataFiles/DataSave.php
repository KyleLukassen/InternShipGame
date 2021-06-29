<?php

$data = $_POST['Save'];
$DataFile = fopen('TextTest.txt', 'w');
fwrite($DataFile, $data);
fclose($DataFile);

$data = $_POST['Inventory'];
$DataFile = fopen('TextTest.txt', 'w');
fwrite($DataFile, $data);
fclose($DataFile);

?>