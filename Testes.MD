<h2>--- [1]. Cenário em Gherkin:</h2>

Funcionalidade: Seleção de Dieta
  Cenário: Usuário escolhe dieta Mediterrânea
    Dado que o usuário seleciona a dieta "Mediterrânea"
    E informa peso "70", altura "170", idade "30" e sexo "Feminino"
    Quando solicita o plano alimentar
    Então o sistema deve sugerir refeições com azeite, peixes e grãos integrais

Funcionalidade: Seleção de Alergias
  Cenário: Usuário preenche suas alergias
    Dado que o usuário informa nome, e-mail e senha
    E seleciona gênero "Feminino" e data de nascimento "1995-06-11"
    E informa alergias "glúten" e "lactose"
    E informa peso "60", altura "165", idade "29" e     preferência alimentar "Vegetariana"
    E seleciona a dieta "Low Carb"
    E seleciona o objetivo "Saúde e Bem-estar"
    Quando solicita o plano alimentar
    Então o sistema deve sugerir refeições sem glúten e     sem lactose

Funcionalidade: Definição de Objetivo
   Cenário: Usuário seleciona objetivo de ganho de     massa muscular
   Dado que o usuário informa peso "75", altura "180",    idade "28" e sexo "Masculino"
   E seleciona o objetivo "Hipertrofia"
   E escolhe a dieta "Cetogênica"
   Quando solicita o plano alimentar
   Então o sistema deve sugerir refeições ricas em    proteínas, como frango, ovos e leguminosas

Funcionalidade: Preferência Alimentar
Cenário: Usuário escolhe preferência alimentar vegana
 Dado que o usuário informa peso "65", altura "172", idade "25" e sexo "Feminino"
 E seleciona a preferência alimentar "Vegana"
 E escolhe a dieta "Vegetariana"
 E seleciona o objetivo "Emagrecimento"
 Quando solicita o plano alimentar
 Então o sistema deve sugerir refeições com vegetais frescos e sem ingredientes de origem animal, respeitando a dieta vegetariana

Funcionalidade: Cálculo de Calorias
Cenário: Sistema calcula calorias para hipertrofia com dieta Low Carb
 Dado que o usuário informa peso "80", altura "175", idade "35" e sexo "Masculino"
 E seleciona o objetivo "Hipertrofia"
 E escolhe a dieta "Low Carb"
 Quando solicita o plano alimentar
 Então o sistema deve apresentar refeições com baixo teor de carboidratos e calorias adequadas para promover o ganho de massa muscular


ID	Funcionalidade	Pré-Condição	Passos	Dados de Entrada	Resultado Esperado	Resultado Obtido	Status (✅/❌)	Observações
FT-01	Seleção de Dieta Mediterrânea	Usuário autenticado e página de “Seleção de Dieta” aberta	1. Acessar a tela de seleção de dieta 2. Selecionar a opção “Mediterrânea” 3. Preencher o campo Peso com 70 kg 4. Preencher o campo Altura com 170 cm 5. Preencher o campo Idade com 30 anos 6. Selecionar Sexo como Feminino 7. Clicar no botão “Solicitar Plano Alimentar”	- Dieta: Mediterrânea - Peso: 70 - Altura: 170 - Idade: 30 - Sexo: Feminino	O sistema exibe um plano alimentar contendo refeições ricas em azeite de oliva, peixes e grãos integrais.	(preencher após a execução do teste)		


--- [2]. Casos de Teste

ID: FT-01	 
Funcionalidade: Seleção de Dieta Mediterrânea
Pré-Condição: Usuário autenticado e página de “Seleção de Dieta” aberta 
Passos: 1. Acessar a tela de seleção de dieta. 2. Selecionar a opção “Mediterrânea” 3. Preencher o campo Peso com 70 kg 4. Preencher o campo Altura com 170 cm 5. Preencher o campo Idade com 30 anos 6. Selecionar Sexo como Feminino 7. Clicar no botão “Solicitar Plano Alimentar”
Dieta: Mediterrânea - Peso: 70 - Altura: 170 - Idade: 30 - Sexo: Feminino 
Resultado Esperado: O sistema exibe um plano alimentar contendo refeições ricas em azeite de oliva, peixes e grãos integrais. 
Resultado: Passou!


--- [3]. Registro de Bugs: Ocorreu o erro da opção selecionada não ficar em destaque

| ID do Bug : BUG-01 
| Caso de Teste Relacionado	: FT-02
| Descrição do Problema	: Ocorreu o erro da opção selecionada não ficar em destaque, tornando confuso para o usuário
| Severidade (Alta/Média/Baixa)	: Baixa
| Status : Resolvida 
| Responsável : Vanderson
| Link para issue no GitHub : Sem Link Disponível


--- [4]. Teste de Usabilidade


1. Metas Definidas
O usuário deve conseguir selecionar uma dieta personalizada em ≤ 30 segundos.

O usuário deve preencher seus dados pessoais em ≤ 1 minuto.

O usuário deve conseguir gerar um plano alimentar completo em ≤ 2 minutos.

O usuário deve encontrar onde registrar alergias/intolerâncias em ≤ 30 segundos.

O usuário deve avaliar positivamente (nota ≥ 4) a facilidade de navegação e clareza das instruções.

2. Participantes
Nome / Código: Participante 01

Perfil: Iniciante

Data: 11/06/2025

Moderador: Ícaro

Dispositivo / Navegador: Smartphone Android / Google Chrome

3. Objetivos do Teste
Avaliar a facilidade de seleção de dieta

Medir o tempo para preencher dados pessoais

Verificar a clareza do plano alimentar gerado

Avaliar localização do campo de alergias/intolerâncias

Observar fluidez do processo de personalização alimentar

4. Tarefas
Nº	Descrição da Tarefa	Tempo Alvo	Tempo Real (s)	Sucesso	Erros / Dificuldades	Observações do Usuário
1	Selecionar a dieta “Low Carb”	30 s	22 s	Sim	Nenhum	“Gostei que as dietas aparecem com ícone e descrição.”
2	Informar peso, altura, idade e sexo	60 s	51 s	Sim	Confusão no botão de continuar	“Achei que tinha que salvar, não só ir pro próximo.”
3	Escolher 3 alimentos preferidos por categoria	45 s	65 s	Sim	Demorou para entender que eram 3 por categoria	“Seria bom um aviso dizendo que faltam X escolhas.”
4	Gerar o plano alimentar e visualizar recomendações	15 s	10 s	Sim	Nenhum	“Foi rápido e bem claro.”
5	Identificar onde registrar alergias/intolerâncias	30 s	47 s	Não	Não encontrou facilmente	“Achei que era nas configurações, mas estava escondido.”
6	Alterar um alimento do plano alimentar gerado	30 s	38 s	Sim	Um pouco confuso — botão pequeno	“Botão de editar podia ser maior e mais visível.”

5. Métricas de Satisfação
Critério	Nota (1–5)	Comentários
Facilidade de navegação	4	"Fácil no geral, mas me perdi na parte das intolerâncias."
Clareza das instruções	3	"As instruções podiam ser mais diretas."
Velocidade de resposta	5	"App é rápido, tudo carrega bem."
Layout e design	4	"Bonito, limpo, mas algumas coisas pequenas demais."
Confiança na ferramenta	4	"Senti segurança no que foi gerado no plano."

6. Feedback Aberto
O que você mais gostou?
"Achei bem fácil montar meu plano e visualizar as refeições."

O que você achou mais difícil?
"Tive dificuldade para encontrar onde colocar alergias."

Sugestões de melhoria:
"Adicionar um botão mais visível para editar plano e cadastrar restrições logo após o cadastro."

7. Conclusões do Moderador
Principais bloqueios encontrados:

Dificuldade em localizar o campo de alergias

Interface pouco intuitiva em partes específicas (ex.: editar alimento)

Pontos fortes observados:

Processo rápido e fluido na maior parte das tarefas

Design visual agradável e respostas rápidas do sistema

Recomendações para próxima iteração:

Destacar com mais clareza o campo de alergias no fluxo principal

Adicionar mensagens guiando o usuário nas escolhas obrigatórias

Aumentar tamanho e contraste de botões de ação (ex.: editar)







