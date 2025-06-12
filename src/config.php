<?php

/* ARQUIVO DE CONFIGURAÇÃO DO BANCO DE DADOS */

// Suas definições (estavam corretas)
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'Senhanova123$'); // Usando a senha que você mostrou
define('DB_NAME', 'projeto_login2');   // Usando o nome do banco que você mostrou


// ---> INÍCIO DA PARTE QUE ESTAVA FALTANDO <---

/* 1. Criação da conexão */
// Esta é a linha que estava faltando. Ela usa as constantes acima
// para se conectar ao banco e cria a variável $conn.
$conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME, 3307);

/* 2. Verificação da conexão */
// Este bloco de código verifica se a conexão foi bem-sucedida.
// Se não, ele mostra um erro claro.
if($conn === false){
    die("ERRO: Não foi possível conectar ao banco de dados. " . mysqli_connect_error());
}

// ---> FIM DA PARTE QUE ESTAVA FALTANDO <---

?>