<?php
require_once "../models/helpers.php";
$obj = new helpers();
session_start($obj->nameSesion());
session_unset();
session_destroy();
header("Location: " . $obj->url() . "app/views/index.html");