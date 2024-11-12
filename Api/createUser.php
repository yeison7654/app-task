<?php
require_once '../controllers/userController.php';
$objUser = new UserController();
$objUser->registerUSer("admin", "admin");