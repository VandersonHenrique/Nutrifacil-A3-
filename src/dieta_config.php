<?php

session_start();


header('Content-Type: application/json');


if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    
    http_response_code(403);
    echo json_encode(['error' => 'Acesso não autorizado']);
    exit;
}

require_once 'config.php';

$sexo_usuario = '';
$idade_usuario = 0;
$data_nasc_db = null;

$sql = "SELECT sexo, data_nascimento FROM usuarios WHERE id = ?";

if ($stmt = $conn->prepare($sql)) {
    $stmt->bind_param("i", $_SESSION['id']);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        $sexo_usuario = $user['sexo'];
        $data_nasc_db = $user['data_nascimento'];
    }
    $stmt->close();
}
$conn->close();


if ($data_nasc_db) {
    $data_nasc = new DateTime($data_nasc_db);
    $hoje = new DateTime();
    $idade_usuario = $hoje->diff($data_nasc)->y;
}

$response_data = [
    'gender' => $sexo_usuario,
    'age' => $idade_usuario
];

echo json_encode($response_data);
