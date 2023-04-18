<?php

$uname = "localhost";
$unmae = "root";
$password = "";

$db_name = "login";

$conn = mysqli_connect($sname,$unmae,$password,$db_name);

if (!$conn){
    echo "Connection nem sikerult, probald meg ujra";
}