<?php
require_once '../models/user.php';
class UserController extends User
{
    public function __construct()
    {
        parent::__construct();
    }
    /*
     *Funcion que me permite el registro de un usuario 
     */
    public function registerUSer(string $user, string $password)
    {
        if ($user == "" || $password == "") {
            $data = array(
                'status' => false,
                'message' => "No se permiten el registro de campos vacios",
                'type' => 'error'
            );
            $this->toJson($data);
            die();
        }
        $request = $this->createUser($user, $password);
        if ($request > 0) {
            $data = array(
                'status' => true,
                'message' => "Registro de usuario completo",
                'type' => 'success'
            );
            $this->toJson($data);
            die();
        }
    }
}