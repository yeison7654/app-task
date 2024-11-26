<?php
if (!$_POST) {
    echo "Metodo no econtrado";
    exit();
}
require_once '../controllers/userController.php';
$objUser = new UserController();
$user = $_POST['username'];
$password = $_POST['password'];
$objUser->loginUser($user, $password);
