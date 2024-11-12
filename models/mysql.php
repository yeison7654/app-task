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
    /*
     * Esta funcion me permite realizar registros de tipo inserte en la base de datos
     */
    protected function insert($sql, array $data)
    {
        $prepared = $this->conexion->prepare($sql);
        $prepared->execute($data);
        $request = $this->conexion->lastInsertId();
        return $request;
    }
    /*
     *Esta funcion permite que realice consulta de tipo select en la base de datos
     * donde devolvera un solo registro
     */
    protected function select($sql, array $data)
    {
        $prepared = $this->conexion->prepare($sql);
        $prepared->execute($data);
        $request = $prepared->fetch(PDO::FETCH_ASSOC);
        return $request;
    }
    /*
     * Esta funcion me permite actualizar registros de tipo inserte en la base de datos
     */
    protected function update($sql, array $data)
    {
        $prepared = $this->conexion->prepare($sql);
        $request = $prepared->execute($data);
        return $request;
    }
    /*
     * Esta funcion me permite eleiminar registros de tipo inserte en la base de datos
     */
    protected function delete($sql, array $data)
    {
        $prepared = $this->conexion->prepare($sql);
        $request = $prepared->execute($data);
        return $request;
    }
    /*
     *Esta funcion permite que realice consulta de tipo select en la base de datos
     * donde devolvera todos los registros
     */
    protected function selectALL($sql, array $data)
    {
        $prepared = $this->conexion->prepare($sql);
        $prepared->execute($data);
        $request = $prepared->fetchAll(PDO::FETCH_ASSOC);
        return $request;
    }

}
