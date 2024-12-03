<?php

require_once '../controllers/taskController.php';
$objTask = new TaskController();
$objTask->getTasks();