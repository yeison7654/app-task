<?php
if (!$_POST) {
    echo "Metodo no econtrado";
    exit();
}
require_once '../controllers/taskController.php';
$objTask = new TaskController();
$title = $_POST['txtTitle'];
$description = $_POST['txtDescription'];
$date = $_POST['txtDate'];
$hour = $_POST['txtHour'];
$objTask->setTask($title, $description, $date, $hour);