<?php
require_once 'mysql.php';
class User extends Mysql
{
    private $intUserId;
    private $stringUser;
    private $stringPassword;

    protected function __construct()
    {
        parent::__construct();
    }
    /*
     * Esta funcion crea un usuario
     */
    protected function createUser($user, $password)
    {
        $sql = "INSERT usuarios (nombre_usuario,`password`) VALUES (?,?);";
        $this->stringUser = $user;
        $this->stringPassword = $password;
        $data = array(
            $this->stringUser,
            $this->stringPassword
        );
        $request = $this->insert($sql, $data);
        return $request;
    }
    /*
     *Modelo de inicio de sesion
     */
    protected function getUser(string $user, string $password)
    {
        $sql = "SELECT u.id,u.nombre_usuario FROM usuarios AS u 
        WHERE u.nombre_usuario=? AND u.`password`=?";
        $this->stringUser = $user;
        $this->stringPassword = $password;
        $data = array(
            $this->stringUser,
            $this->stringPassword
        );
        $request = $this->select($sql, $data);
        return $request;
    }
}