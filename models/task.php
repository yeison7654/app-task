<?php
require_once 'mysql.php';
class Task extends Mysql
{
    private $id;
    private $idUser;
    private $title;
    private $description;
    private $status;
    private $date;
    private $hour;
    protected function __construct()
    {
        parent::__construct();
    }
    /**
     * Crear o registrar la tarea
     */
    protected function createTask($idUser, $title, $description, $status, $date, $hour)
    {
        $data = array(
            $this->idUser = $idUser,
            $this->title = $title,
            $this->description = $description,
            $this->date = $date,
            $this->hour = $hour,
            $this->status = $status,
        );
        $sql = "INSERT INTO tareas (usuario_id,titulo,descripcion,fecha,hora,estado) VALUE (?,?,?,?,?,?);";
        $response = $this->insert($sql, $data);
        return $response;
    }
    /**
     * funcion para obtener las tareas
     */
    protected function selectTasks($idUser)
    {
        $sql = "SELECT * FROM tareas WHERE usuario_id = ?";
        $data = array($idUser);
        $response = $this->selectALL($sql, $data);
        return $response;
    }
    /**
     * Funcion para actualizar el estado de la tarea
     */
    protected function updateStatus($id, $status)
    {
        $this->id = $id;
        $this->status = $status;
        $data = array(
            $this->status,
            $this->id
        );
        $sql = "UPDATE tareas SET estado = ? WHERE id = ?";
        $response = $this->update($sql, $data);
        return $response;
    }
}