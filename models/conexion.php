<?php
require_once('helpers.php');
require_once('../config/config.php');
class Conexion extends helpers
{
    private $host = DB_HOST;
    private $user;
    private $pass;
    private $db;
    private $port;
    private $charset;
    private $conexion;

    protected function __construct()
    {
        try {
            $this->conexion = new PDO(
                dsn: "mysql:host={$this->host};dbname={$this->db};port={$this->port};charset={$this->charset}",
                username: $this->user,
                password: $this->pass
            );
            $this->conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $error) {
            $data = array(
                'status' => false,
                'message' => $error->getMessage(),
                'type' => 'error'
            );
            $this->toJson($data);
        }
    }
}
