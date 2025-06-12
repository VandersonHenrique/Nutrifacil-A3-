<?php


require_once 'config.php';



if ($_SERVER["REQUEST_METHOD"] == "POST") {

    
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $password_texto_puro = $_POST['password']; 
    $sexo = filter_input(INPUT_POST, 'sexuality', FILTER_SANITIZE_STRING);
    $data_nascimento = $_POST['dob']; 

    
    $alergias = [];
    if (!empty($_POST['allergies'])) {
        foreach ($_POST['allergies'] as $alergia) {
            $alergias[] = filter_var($alergia, FILTER_SANITIZE_STRING);
        }
    }
    $alergias_string = implode(", ", $alergias);


    
    if (empty($name) || empty($email) || empty($password_texto_puro) || empty($sexo) || empty($data_nascimento)) {
        die("Erro: Todos os campos obrigatórios devem ser preenchidos.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Erro: Formato de e-mail inválido.");
    }

    if (strlen($password_texto_puro) < 6) {
        die("Erro: A senha deve ter no mínimo 6 caracteres.");
    }


    
    $senha_hash = password_hash($password_texto_puro, PASSWORD_DEFAULT);


    
    $conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME, 3307);

    
    if ($conn->connect_error) {
        
        die("Falha na conexão com o banco de dados: " . $conn->connect_error);
    }


    
    $stmt = $conn->prepare("INSERT INTO usuarios (nome, email, senha, sexo, data_nascimento, alergias) VALUES (?, ?, ?, ?, ?, ?)");
    
    
    $stmt->bind_param("ssssss", $name, $email, $senha_hash, $sexo, $data_nascimento, $alergias_string);

    
    if ($stmt->execute()) {
        
        header("Location: login.html?status=sucesso");
        exit(); 
    } else {
        
        echo "Erro ao finalizar o cadastro: " . $stmt->error;
    }

    
    $stmt->close();
    $conn->close();

} else {
    
    header("Location: cadastro.html");
    exit();
}
?>