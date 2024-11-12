<?php
require_once('conexion.php');
class Mysql extends Conexion
{
    private $conexion;
    protected function __construct()
    {
        parent::__construct();
        $this->conexion = new Conexion();
        $this->conexion = $this->conexion->getConexion();
    }
    protected function insert($sql, array $data)
    {
        $request = $this->conexion->prepare($sql);
        $request->execute($data);
    }
}
