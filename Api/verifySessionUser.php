<?php
require_once "../models/helpers.php";
$objHlprs = new helpers();
session_start($objHlprs->nameSesion());
if (isset($_SESSION["user_info"])) {
    //preparo el array para mostrar la info del usuario que se inicio sesion
    $data = array(
        'status' => true,
        'message' => "Estas conectado al sistema",
        'type' => 'info',
        'infoUser' => $_SESSION["user_info"]
    );
    echo json_encode($data);
    die();
}
//preparo el array para mostrar la info del usuario que se inicio sesion
$data = array(
    'status' => false,
    'message' => "No estas conectado al sistema",
    'type' => 'error',
    'url' => $objHlprs->url() . "app/views/index.html"
);
echo json_encode($data);
die();