<?php

//aqui se puede hacer una consola para guardar los datos
$jsondata = array("success"=> true,
"mensaje" => 'Los datos se han registrado correctamente');

$jsondata = array("success"=> false,
"mensaje" => 'Ocurrio un erroral procesar los datos');

header('Content-type: applicacion/json; chrset=utf-8');
echo json_encode($jsondata);
exit();
?>