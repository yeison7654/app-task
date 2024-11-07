<?php
class helpers
{
    public function toJson($data)
    {
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }

}
