<?php
if (!$_POST) {
    echo "Metodo no econtrado";
    exit();
}
require_once '../controllers/userController.php';
$objUser = new UserController();
$user = $_POST['txtUserName'];
$password1 = $_POST['txtPassword1'];
$password2 = $_POST['txtPassword2'];
if ($password1 != $password2) {
    $data = array(
        'status' => false,
        'message' => "Las contraseñas no coinciden",
        'type' => 'error'
    );
    echo json_encode($data);
    die();
}
$password1 = md5($password1);
$objUser->registerUSer($user, $password1);
