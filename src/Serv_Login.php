<?php

session_start();


require_once 'config.php';


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = $_POST['email'];
    $password = $_POST['password'];

    
    $sql = "SELECT id, nome, senha FROM usuarios WHERE email = ?";
    
    if ($stmt = $conn->prepare($sql)) {
        
        $stmt->bind_param("s", $email);

        
        if ($stmt->execute()) {
            $result = $stmt->get_result();

            
            if ($result->num_rows === 1) {
                $user = $result->fetch_assoc();
                
                
                
                if (password_verify($password, $user['senha'])) {
                    

                    
                    session_regenerate_id(true); 
                    $_SESSION['loggedin'] = true;
                    $_SESSION['id'] = $user['id'];
                    $_SESSION['name'] = $user['nome'];

                    
                    header("Location: dieta.html");
                    exit;

                } else {
                    
                    header("Location: login.html?error=invalid_credentials");
                    exit;
                }
            } else {
                
                header("Location: login.html?error=invalid_credentials");
                exit;
            }
        } else {
            echo "Ops! Algo deu errado. Por favor, tente novamente mais tarde.";
        }
        $stmt->close();
    }
    $conn->close();
}
?>