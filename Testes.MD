<h2>[1]. Cenário em Gherkin:</h2>
<ul>
  <li>Funcionalidade: Seleção de Dieta</li>  
  <li>Cenário: Usuário escolhe dieta Mediterrânea</li>
  <li>Dado que o usuário seleciona a dieta "Mediterrânea"</li>
  <li>E informa peso "70", altura "170", idade "30" e sexo "Feminino"</li>
  <li>Quando solicita o plano alimentar</li>
  <li>Então o sistema deve sugerir refeições com azeite, peixes e grãos integrais</li>
</ul>
<hr>
<ul>
  <li>Funcionalidade: Seleção de Alergias</li>
  <li>Cenário: Usuário preenche suas alergias</li>
  <li>Dado que o usuário informa nome, e-mail e senha</li>
  <li>E seleciona gênero "Feminino" e data de nascimento "1995-06-11"</li>
  <li>E informa alergias "glúten" e "lactose"</li>
  <li>E informa peso "60", altura "165", idade "29" e preferência alimentar "Vegetariana"</li>
  <li>E seleciona a dieta "Low Carb"</li>
  <li>E seleciona o objetivo "Saúde e Bem-estar"</li>
  <li>Quando solicita o plano alimentar</li>
  <li>Então o sistema deve sugerir refeições sem glúten e sem lactose</li>
</ul>
<hr>
<ul>
  <li>Funcionalidade: Definição de Objetivo</li>
  <li>Cenário: Usuário seleciona objetivo de ganho de massa muscular</li>
  <li>Dado que o usuário informa peso "75", altura "180", idade "28" e sexo "Masculino"</li>
  <li>E seleciona o objetivo "Hipertrofia"</li>
  <li>E escolhe a dieta "Cetogênica"</li>
  <li>Quando solicita o plano alimentar</li>
  <li>Então o sistema deve sugerir refeições ricas em proteínas, como frango, ovos e leguminosas</li>
</ul>
<hr>
<ul>
  <li>Funcionalidade: Preferência Alimentar</li>
  <li>Cenário: Usuário escolhe preferência alimentar vegana</li>
  <li>Dado que o usuário informa peso "65", altura "172", idade "25" e sexo "Feminino"</li>
  <li>E seleciona a preferência alimentar "Vegana"</li>
  <li>E escolhe a dieta "Vegetariana"</li>
  <li>E seleciona o objetivo "Emagrecimento"</li>
  <li>Quando solicita o plano alimentar</li>
  <li>Então o sistema deve sugerir refeições com vegetais frescos e sem ingredientes de origem animal, respeitando a dieta vegetariana</li>
</ul>
<hr>
<ul>
  <li>Funcionalidade: Cálculo de Calorias</li>
  <li>Cenário: Sistema calcula calorias para hipertrofia com dieta Low Carb</li>
  <li>Dado que o usuário informa peso "80", altura "175", idade "35" e sexo "Masculino"</li>
  <li>E seleciona o objetivo "Hipertrofia"</li>
  <li>E escolhe a dieta "Low Carb"</li>
  <li>Quando solicita o plano alimentar</li>
<li>Então o sistema deve apresentar refeições com baixo teor de carboidratos e calorias adequadas para promover o ganho de massa muscular</li>
</ul>
<hr>

<h2>[2]. Casos de Teste</h2>

| ID        | Funcionalidade                | Pré-Condição | Passos       | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status (✅/❌) | Observações |
|:----------|:-----------------------------:|-------------:|-------------:|-----------------:|-------------------:|-----------------:|----------------:|------------:|
| FT-01     | Seleção de Dieta Vegetariana | Usuário autenticado e página de “Seleção de Dieta” aberta | 1. Acessar a tela de seleção de dieta 2. Selecionar a opção “Vegetariana” 3. Preencher o campo Peso com 100 kg 4. Preencher o campo Altura com 182 cm 5. Preencher o campo Idade com 40 anos 6. Selecionar Sexo como Masculino 7. Clicar no botão “Gerar Dieta” | Dieta: Vegetariana - Peso: 100 - Altura: 182 - Idade: 40 - Sexo: Masculino | O sistema exibe um plano alimentar contendo refeições ricas em lentilhas com foco em vegetais não amilácios com variedade de folhas verdes, arroz integral e batata doce.|  Passou! |  ✅  |  O sistema respondeu como o esperado  |

| ID        | Funcionalidade                | Pré-Condição | Passos       | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status (✅/❌) | Observações |
|:----------|:-----------------------------:|-------------:|-------------:|-----------------:|-------------------:|-----------------:|----------------:|------------:|
| FT-01     | Seleção de Dieta Mediterrânea | Usuário autenticado e página de “Seleção de Dieta” aberta | 1. Acessar a tela de seleção de dieta 2. Selecionar a opção “Mediterrânea” 3. Preencher o campo Peso com 60 kg 4. Preencher o campo Altura com 155 cm 5. Preencher o campo Idade com 22 anos 6. Selecionar Sexo como Feminino 7. Clicar no botão “Gerar Dieta” | Dieta: Mediterrânea - Peso: 60 - Altura: 155 - Idade: 40 - Sexo: Feminino | O sistema exibe um plano alimentar contendo refeições ricas em Peixes, Frango, Ovos, Tomate, Pimentão, Espinafre, Brocolis e Frutas.|  Passou! |  ✅  |  O sistema respondeu como o esperado  |

| ID        | Funcionalidade                | Pré-Condição | Passos       | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status (✅/❌) | Observações |
|:----------|:-----------------------------:|-------------:|-------------:|-----------------:|-------------------:|-----------------:|----------------:|------------:|
| FT-01     | Seleção de Dieta Low Carb | Usuário autenticado e página de “Seleção de Dieta” aberta | 1. Acessar a tela de seleção de dieta 2. Selecionar a opção “Low Carb” 3. Preencher o campo Peso com 80 kg 4. Preencher o campo Altura com 169 cm 5. Preencher o campo Idade com 23 anos 6. Selecionar Sexo como Masculino 7. Clicar no botão “Gerar Dieta” | Dieta: Low Carb - Peso: 80 - Altura: 169 - Idade: 23 - Sexo: Masculino | O sistema exibe um plano alimentar contendo refeições ricas Frango, Ovo, Couve-flor, Abobrinha, Pimentão, Alface e Rucula.|  Passou! |  ✅  |  O sistema respondeu como o esperado  |

| ID        | Funcionalidade                | Pré-Condição | Passos       | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status (✅/❌) | Observações |
|:----------|:-----------------------------:|-------------:|-------------:|-----------------:|-------------------:|-----------------:|----------------:|------------:|
| FT-01     | Seleção de Dieta Cetogênica | Usuário autenticado e página de “Seleção de Dieta” aberta | 1. Acessar a tela de seleção de dieta 2. Selecionar a opção “Cetogênica” 3. Preencher o campo Peso com 110 kg 4. Preencher o campo Altura com 175 cm 5. Preencher o campo Idade com 28 anos 6. Selecionar Sexo como Masculino 7. Clicar no botão “Gerar Dieta” | Dieta: Cetogênica - Peso: 110 - Altura: 175 - Idade: 28 - Sexo: Masculino | O sistema exibe um plano alimentar contendo refeições ricas Carnes gordas, Ovos, Folhas verdes, Pepino, Abacate, Óleo de coco e Castanhas.|  Passou! |  ✅  |  O sistema respondeu como o esperado  |

| ID        | Funcionalidade                | Pré-Condição | Passos       | Dados de Entrada | Resultado Esperado | Resultado Obtido | Status (✅/❌) | Observações |
|:----------|:-----------------------------:|-------------:|-------------:|-----------------:|-------------------:|-----------------:|----------------:|------------:|
| FT-01     | Consultar sua taxa de betabolismo, IMC e quantidade de água diaria que deve consumir | Usuário autenticado e página de “Seleção de Dieta” aberta | 1. Acessar a tela de seleção de dieta 2. Selecionar a opção “Low Carb” 3. Preencher o campo Peso com 87 kg 4. Preencher o campo Altura com 183 cm 5. Preencher o campo Idade com 23 anos 6. Selecionar Sexo como Masculino 7. Clicar no botão “Calcular resultados” | Taxa de Metabolismo = 1903.75kcal, IMC = 25.98(sobrepeso), e deve consumir 3 Litros diarios de água. |  Passou! |  ✅  |  O sistema respondeu como o esperado  |

<h2>[3]. Registro de Bugs: Ocorreu o erro da opção selecionada não ficar em destaque</h2>

| ID do Bug | Caso de Teste Relacionado | Descrição do Problema | Severidade (Alta/Média/Baixa) | Status | Responsável | Link para issue no GitHub |
|:----------|:-----------------------------:|-------------:|-------------:|-----------------:|-------------------:|-----------------:|
| BUG-01 | FT-02 | Ocorreu o erro da opção selecionada não ficar em destaque, tornando confuso para o usuário | Baixa | Resolvida | Vanderson | Sem Link Disponível |

<h2>[4]. Teste de Usabilidade</h2>

1. Metas Definidas<br>
O usuário deve conseguir selecionar uma dieta personalizada em ≤ 30 segundos.<br>
O usuário deve preencher seus dados pessoais em ≤ 1 minuto.<br>
O usuário deve conseguir gerar um plano alimentar completo em ≤ 2 minutos.<br>
O usuário deve encontrar onde registrar alergias/intolerâncias em ≤ 30 segundos.<br>
O usuário deve avaliar positivamente (nota ≥ 4) a facilidade de navegação e clareza das instruções.<br>
<br>
2. Participantes<br>
Nome / Código: Participante 01<br>
Perfil: Iniciante<br>
Data: 11/06/2025<br>
Moderador: Ícaro<br>
Dispositivo / Navegador: Smartphone Android / Google Chrome<br>
<br>
3. Objetivos do Teste<br>
Avaliar a facilidade de seleção de dieta<br>
Medir o tempo para preencher dados pessoais<br>
Verificar a clareza do plano alimentar gerado<br>
Avaliar localização do campo de alergias/intolerâncias<br>
Observar fluidez do processo de personalização alimentar<br>
<br>
4. Tarefas<br>
Nº	Descrição da Tarefa	Tempo Alvo	Tempo Real (s)	Sucesso	Erros / Dificuldades	Observações do Usuário<br>
1	Selecionar a dieta “Low Carb”	30 s	22 s	Sim	Nenhum	“Gostei que as dietas aparecem com ícone e descrição.”<br>
2	Informar peso, altura, idade e sexo	60 s	51 s	Sim	Confusão no botão de continuar	“Achei que tinha que salvar, não só ir pro próximo.”<br>
3	Escolher 3 alimentos preferidos por categoria	45 s	65 s	Sim	Demorou para entender que eram 3 por categoria	“Seria bom um aviso dizendo que faltam X escolhas.”<br
4	Gerar o plano alimentar e visualizar recomendações	15 s	10 s	Sim	Nenhum	“Foi rápido e bem claro.”<br>
5	Identificar onde registrar alergias/intolerâncias	30 s	47 s	Não	Não encontrou facilmente	“Achei que era nas configurações, mas estava escondido.”<br>
6	Alterar um alimento do plano alimentar gerado	30 s	38 s	Sim	Um pouco confuso — botão pequeno	“Botão de editar podia ser maior e mais visível.”<br>
<br>
5. Métricas de Satisfação<br>
Critério	Nota (1–5)	Comentários<br>
Facilidade de navegação	4	"Fácil no geral, mas me perdi na parte das intolerâncias."<br>
Clareza das instruções	3	"As instruções podiam ser mais diretas."<br>
Velocidade de resposta	5	"App é rápido, tudo carrega bem."<br>
Layout e design	4	"Bonito, limpo, mas algumas coisas pequenas demais."<br>
Confiança na ferramenta	4	"Senti segurança no que foi gerado no plano."<br>
<br>
6. Feedback Aberto<br>
O que você mais gostou?<br>
"Achei bem fácil montar meu plano e visualizar as refeições."<br>
<br>
O que você achou mais difícil?<br>
"Tive dificuldade para encontrar onde colocar alergias."<br>
<br>
Sugestões de melhoria:<br>
"Adicionar um botão mais visível para editar plano e cadastrar restrições logo após o cadastro."<br>
<br>
7. Conclusões do Moderador<br>
Principais bloqueios encontrados:<br>
<br>
Dificuldade em localizar o campo de alergias<br>
<br>
Interface pouco intuitiva em partes específicas (ex.: editar alimento)<br>
<br>
Pontos fortes observados:<br>
<br>
Processo rápido e fluido na maior parte das tarefas<br>
<br>
Design visual agradável e respostas rápidas do sistema<br>
<br>
Recomendações para próxima iteração:<br>
<br>
Destacar com mais clareza o campo de alergias no fluxo principal<br>
<br>
Adicionar mensagens guiando o usuário nas escolhas obrigatórias<br>
<br>
Aumentar tamanho e contraste de botões de ação (ex.: editar)<br>
