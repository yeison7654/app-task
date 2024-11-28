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
    public function loginUser(string $user, string $password)
    {
        if ($user == "" || $password == "") {
            $data = array(
                'status' => false,
                'message' => "Los campos no pueden estar vacios",
                'type' => 'error'
            );
            $this->toJson($data);
            die();
        }
        $password = md5($password);
        $request = $this->getUser($user, $password);
        if (!$request) {
            $data = array(
                'status' => false,
                'message' => "El usuario o contraseña son incorrectos",
                'type' => 'error'
            );
            $this->toJson($data);
            die();
        }
        //creamos la sesion con un nombre
        session_start($this->nameSesion());
        //variable de sesion, almacena la informacion del usuario que se incio sesion
        $_SESSION["user_info"] = $request;
        $data = array(
            'status' => true,
            'message' => "Bienvenido",
            'type' => 'success',
            'url' => $this->url() . "app/views/app-task.html"
        );
        $this->toJson($data);
        die();
    }
}