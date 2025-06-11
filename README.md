<h2>1. Nome do Projeto:</h2>
   NutriFácil
   
<h2>2. Descrição</h2>

EEste projeto acadêmico tem como objetivo principal oferecer uma ferramenta rápida e simples para a análise da saúde e bem-estar individual. A partir de dados fornecidos pelo usuário, o sistema realizará o cálculo da Taxa de Metabolismo Basal (TMB), do Índice de Massa Corporal (IMC) e do Consumo Diário de Água recomendado. Além disso, e de forma personalizada, o projeto irá sugerir um plano alimentar adaptado às preferências e necessidades do usuário.

  <h2>3. Funcionalidades Principais</h2>

      a. Cadastro e Login de Usuários: Sistema seguro para criação e autenticação de contas.
      b. Cálculos de Saúde:
      c. Taxa de Metabolismo Basal (TMB)
      d. Índice de Massa Corporal (IMC)
      e. Consumo de Água Diário Ideal
      f. Plano Alimentar Personalizado: Sugestão de dieta baseada nos objetivos e preferências do usuário.
      
  <h2>4. Pré-requisitos</h2>

   a. Antes de começar, garanta que você tenha os seguintes softwares instalados em sua máquina:
   b. XAMPP: Um ambiente de servidor local que inclui Apache, MySQL e PHP.
   c. Git: Para clonar o repositório.
   d. Um navegador web: (ex: Google Chrome, Firefox).
   e. MySQL Workbench (Opcional, mas recomendado): Para gerenciar o banco de dados com mais facilidade.

<h2>. instalação e Execução do Projeto</h2>
Siga este passo a passo para rodar o projeto em sua máquina local.

   a. Clonar o Repositório
      Abra o seu terminal ou Git Bash e clone este repositório para o seu computador.
   b. Mover a Pasta do Projeto
      Mova a pasta clonada  para dentro da pasta htdocs do seu XAMPP. O caminho padrão é:
   C:\xampp\htdocs\
      O caminho final do projeto deverá ser: C:\xampp\htdocs\NutriFacil\
   c. Iniciar o Servidor XAMPP
      Abra o Painel de Controle do XAMPP e inicie os módulos Apache e MySQL.
      Se o MySQL falhar, edite o arquivo my.ini para usar uma porta alternativa 3307.
   d. Importar o Banco de Dados
      O jeito mais fácil de configurar o banco de dados é importando o arquivo .sql que está neste repositório.
      Abra o MySQL Workbench e conecte-se ao seu servidor local .
      No menu superior, vá em File > Open SQL Script... e selecione o arquivo banco_de_dados.sql que está na pasta do projeto.
   e. Configurar a Conexão
      Para que o código PHP se conecte ao banco de dados, você precisa configurar suas credenciais.
      Na pasta do projeto, encontre o arquivo config.example.php.
      Faça uma cópia deste arquivo e renomeie a cópia para config.php.
      Abra o config.php e edite as seguintes linhas com as suas informações:
      define('DB_PASSWORD', 'sua_senha_do_mysql_root'); 
      Importante: Se você precisou alterar a porta do MySQL no Passo 3 (ex: para 3307), você precisará ajustar a linha de conexão nos arquivos processar_cadastro.php e Serv_Login.php para incluir a porta:
      Exemplo de alteração: "$conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME, 3307);"
   f. Acessar o Projeto
      Abra seu navegador e acesse o site.
      Ex: http://localhost/NutriFacil/login.html


   
<h2>4. Uso do projeto</h2>

   a. Criar sua Conta<br>
   Clique em "Fazer Cadastro": Você encontrará essa opção na tela inicial do aplicativo.
   Preencha seus Dados Essenciais: Informe seu Nome completo, E-mail, crie uma Senha segura, selecione seu Gênero e insira sua Data de Nascimento e suas alergias. Certifique-se de que todas as informações estejam corretas para garantir a precisão dos cálculos.

   b. Informar Dados para Cálculos e Dieta
   Após o cadastro e login, você será direcionado(a) para uma seção onde precisará fornecer os dados necessários pros cálculos e pra personalização da sua dieta. Esses dados incluem:
   Altura: Em centímetros (ex: 170).
   Peso: Em quilogramas (ex: 75.5).
   Objetivo: Escolha entre Emagrecimento ou Hipertrofia.
   Preferência de Alimento: Indique os tipos de alimentos que você gostaria de incluir ou evitar na sua dieta, como Proteína, Legume, Verdura ou Carboidrato.
   Tipo de Dieta: Selecione o estilo de dieta que mais se alinha com suas preferências, como Mediterrânea, Low Carb, Cetogênica ou Vegetariana.
   
   c. Gerar Seus Resultados e Dieta<br>
   Com todas as informações preenchidas, o sistema processará os dados e apresentará instantaneamente:<br>
   
   Sua Taxa de Metabolismo Basal (TMB).
   Seu Índice de Massa Corporal (IMC), com uma classificação indicativa.
   A recomendação de Consumo Diário de Água.
   Uma Dieta Personalizada adaptada aos seus objetivos e preferências, com sugestões de refeições para o café da manhã, almoço, jantar e lanches.

<h2>5. Inclusão de créditos</h2>
Vanderson Henrique da Silva Correia Filho / https://github.com/VandersonHenrique
Fernando Rufino Barcelos / https://github.com/fernandorufinobarcelos
Ícaro de lima Wanzeler / https://github.com/IcaroLW
Emilli Giuliane Pereira Lima / https://github.com/Emilli-Giuliane

<h2>6. Inclusão de uma licença</h2>
MIT License<br>

Copyright (c) 2025 UNA - Gestão e Qualidade de Software 2025.1<br>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:<br>

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.<br>

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<h2>7. Inclusão de testes</h2>
