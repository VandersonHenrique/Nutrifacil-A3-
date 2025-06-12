1 - Cenário em Gherkin:

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


2 - Casos de Teste

ID: FT-01	 
Funcionalidade: Seleção de Dieta Mediterrânea
Pré-Condição: Usuário autenticado e página de “Seleção de Dieta” aberta 
Passos: 1. Acessar a tela de seleção de dieta. 2. Selecionar a opção “Mediterrânea” 3. Preencher o campo Peso com 70 kg 4. Preencher o campo Altura com 170 cm 5. Preencher o campo Idade com 30 anos 6. Selecionar Sexo como Feminino 7. Clicar no botão “Solicitar Plano Alimentar”
Dieta: Mediterrânea - Peso: 70 - Altura: 170 - Idade: 30 - Sexo: Feminino 
Resultado Esperado: O sistema exibe um plano alimentar contendo refeições ricas em azeite de oliva, peixes e grãos integrais. 
Resultado: Passou!

3 - Registro de Bugs: Ocorreu o erro da opção selecionada não ficar em destaque

| ID do Bug | Caso de Teste Relacionado	| Descrição do Problema	| Severidade (Alta/Média/Baixa)	| Status | Responsável | Link para issue no GitHub |
| ---      | ---       | ---      | ---      | ---      | ---      | ---      | ---      |
| BUG-01 | FT-02 | Ocorreu o erro da opção selecionada não ficar em destaque, tornando confuso para o usuário | Baixa	| Resolvida | Vanderson | Sem Link Disponível |







Caso de teste:

Registro de Bugs: nenhum foi encontrado
