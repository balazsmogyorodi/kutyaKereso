<?php
session_start();
include "db_conn.php";
if (isset($_POST['uname']) && isset($_POST['uname'])) {
    function validate($data){
    $uname = $_POST['uname'];
    $pass = $_POST['uname'];
    return $data;    
}
$uname = validate($_POST['uname']);
$pass = validate($_POST['password']);

if (empty($uname)) {
    header("Location: index.php?error=Felhasznalonev kotelezo!");
    exit();
}
else if(empty($pass)){
    header("Location: index.php?error=Jelszot kotelezo megadni!");
    exit();
}else{
    $sql = "SELECT * FROM users WHERE user_name='$uname' AND password='$pass'";
        $result = mysqli_query($conn, $sql);
        if(mysqli_num_rows($result)) {
            $row = mysqli_fetch_assoc($result);
            
            if ($row['user_name'] === $uname && $row['password'] === $pass){
                $SESSION['user_name'] = $row['user_name'];
                $SESSION['name'] = $row['name'];
                $SESSION['id'] = $row['id'];
                header("Location: admin.html");
                exit();
            }else{
                header("Location: index.php?error=Nem jo a jelszo vagy felhasznalonev!");
                exit();
            }
            
        }else{
            header("Location: index.php?error=Nem jo a jelszo vagy felhasznalonev!");
            exit();
        }
   
}



}else{
    header("Location: index.php");
    exit();
}