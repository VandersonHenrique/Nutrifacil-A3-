<?php

session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    http_response_code(403); 
    echo json_encode(['error' => 'Acesso não autorizado. Por favor, faça login novamente.']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); 
    echo json_encode(['error' => 'Método de requisição inválido.']);
    exit;
}


$data = json_decode(file_get_contents('php://input'), true);
if (empty($data['objective']) || empty($data['dietType'])) {
    http_response_code(400); 
    echo json_encode(['error' => 'Dados insuficientes para gerar a dieta.']);
    exit;
}

$objetivo = $data['objective'];
$tipo_dieta = $data['dietType'];
$preferencias = $data['preferences'] ?? [];


require_once 'config.php';


$alergias_usuario = [];
$sql_alergias = "SELECT alergias FROM usuarios WHERE id = ?";
if ($stmt = $conn->prepare($sql_alergias)) {
    $stmt->bind_param("i", $_SESSION['id']);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($row = $result->fetch_assoc()) {
        
        $alergias_usuario = !empty($row['alergias']) ? array_map('trim', explode(',', $row['alergias'])) : [];
    }
    $stmt->close();
}
$conn->close();


$dietas_db = [
    "emagrecimento" => [
        "mediterranea" => [
            "Proteínas" => ["Peixes (salmão, sardinha)", "frango magro", "ovos", "grão de bico", "lentilha"],
            "Legumes" => ["Abobrinha", "berinjela", "tomate", "pimentão", "cebola"],
            "Verduras" => ["Espinafre", "couve", "brócolis", "couve-flor"],
            "Carboidratos" => ["Pão integral", "arroz integral", "batata doce", "quinoa", "azeite de oliva", "frutas"]
        ],
        "low_carb" => [
            "Proteínas" => ["Frango", "peixe", "carne vermelha magra", "ovos", "queijos brancos"],
            "Legumes" => ["Brócolis", "couve-flor", "abobrinha", "berinjela", "pimentões"],
            "Verduras" => ["Alface", "rúcula", "espinafre", "couve"],
            "Gorduras Boas" => ["Abacate", "sementes", "oleaginosas", "azeite de oliva"]
        ],
        "cetogenica" => [
            "Proteínas" => ["Carnes gordas", "peixes gordos (salmão)", "ovos", "bacon"],
            "Verduras" => ["Folhas verdes", "aspargos", "pepino"],
            "Gorduras Boas" => ["Abacate", "óleo de coco", "manteiga", "castanhas"]
        ],
        "vegetariana" => [
            "Proteínas" => ["Lentilha", "grão de bico", "tofu", "tempeh", "seitan", "ovos"],
            "Legumes" => ["Todos os tipos, com foco em vegetais não-amiláceos"],
            "Verduras" => ["Variedade de folhas verdes e vegetais folhosos"],
            "Carboidratos" => ["Arroz integral", "quinoa", "batata doce", "pães integrais"]
        ]
    ],
    "hipertrofia" => [
        "mediterranea" => [
            "Proteínas" => ["Peixes gordos e magros", "frango", "ovos", "leguminosas", "iogurte grego"],
            "Legumes" => ["Abundância de todos os tipos"],
            "Verduras" => ["Grande variedade de folhas verdes escuras"],
            "Carboidratos" => ["Arroz integral", "quinoa", "batata doce", "pães e massas integrais", "aveia"]
        ],
        "low_carb" => [
            "Proteínas" => ["Carnes magras e gordas", "ovos", "whey protein", "queijos"],
            "Legumes" => ["Brócolis", "couve-flor", "espinafre", "aspargos"],
            "Verduras" => ["Todas as folhas verdes"],
            "Carboidratos" => ["Porções controladas de batata doce ou mandioca pós-treino"]
        ],
        "cetogenica" => [
            "Proteínas" => ["Carnes (bovina, suína, frango)", "peixes", "ovos", "whey protein"],
            "Verduras" => ["Todas as folhas verdes e vegetais com baixo carboidrato"],
            "Gorduras Boas" => ["Abacate", "azeite", "manteiga de amendoim", "óleos saudáveis"]
        ],
        "vegetariana" => [
            "Proteínas" => ["Grão de bico", "tofu", "seitan", "proteína de soja/ervilha", "ovos", "iogurte"],
            "Legumes" => ["Abundância para vitaminas e minerais"],
            "Verduras" => ["Grande variedade de folhas verdes escuras"],
            "Carboidratos" => ["Arroz integral", "quinoa", "batata doce", "aveia", "pães e massas integrais"]
        ]
    ]
];


function ehAlimentoSeguro($alimento, $alergias) {
    $alimento_lower = strtolower($alimento);
    if (in_array('lactose', $alergias) && (strpos($alimento_lower, 'leite') !== false || strpos($alimento_lower, 'queijo') !== false || strpos($alimento_lower, 'iogurte') !== false)) {
        return false;
    }
    if (in_array('gluten', $alergias) && (strpos($alimento_lower, 'pão') !== false || strpos($alimento_lower, 'massa') !== false || strpos($alimento_lower, 'trigo') !== false || strpos($alimento_lower, 'seitan') !== false)) {
        return false;
    }
    if (in_array('ovo', $alergias) && strpos($alimento_lower, 'ovo') !== false) {
        return false;
    }
    if (in_array('frutos_do_mar', $alergias) && (strpos($alimento_lower, 'peixe') !== false || strpos($alimento_lower, 'salmão') !== false || strpos($alimento_lower, 'sardinha') !== false)) {
        return false;
    }
    return true;
}


$dieta_final = [];
$dieta_base = $dietas_db[$objetivo][$tipo_dieta] ?? [];

foreach ($dieta_base as $grupo => $alimentos) {
    $alimentos_seguros = [];
    foreach ($alimentos as $alimento) {
        if (ehAlimentoSeguro($alimento, $alergias_usuario)) {
            $alimentos_seguros[] = $alimento;
        }
    }
    
    if (!empty($alimentos_seguros)) {
        $dieta_final[$grupo] = $alimentos_seguros;
    }
}


echo json_encode($dieta_final);

?>
