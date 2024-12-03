<?php
if (!$_POST) {
    echo "Metodo no econtrado";
    exit();
}
require_once '../controllers/taskController.php';
$objTask = new TaskController();
$title = $_POST['task-title'];
$description = $_POST['task-description'];
$date = $_POST['task-date'];
$hour = $_POST['task-time'];
$objTask->setTask($title, $description, $date, $hour);