<?php
require_once '../models/task.php';
class TaskController extends Task
{
    public function __construct()
    {
        parent::__construct();
    }
    public function setTask( $title, $description, $date, $hour){
        session_start($this->nameSesion());
        //llenado de variables
        $idUser= $_SESSION["user_info"]["id"];
        $status="pendiente";
        if($title=="" || $date=="" || $hour==""){
            echo $this->toJson(
                'status' => false,
                'message' => "Los campos no pueden estar vacios",
                'type' => 'error'
            );  
            die();          
        }
        $request=$this->createTask($idUser, $title, $description, $status, $date, $hour);
        if($request>0){
            echo $this->toJson(
                'status' => true,
                'message' => "Tarea registrada correctamente",
                'type' => 'success'
            );  
            die();    
        }
        echo $this->toJson(
            'status' => false,
            'message' => "Ocurrio un error y no logro registrar la tarea",
            'type' => 'error'
        );  
        die();
    }
}