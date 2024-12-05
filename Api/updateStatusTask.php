<?php
if (!$_POST) {
    echo "Metodo no econtrado";
    exit();
}
require_once '../controllers/taskController.php';
$task = new TaskController();
$task->updateStatusTask($_POST["id"], $_POST["estado"]);