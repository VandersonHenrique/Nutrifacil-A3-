<h2>1. Nome do Projeto:</h2>
   NutriFácil
   
<h2>2. Descrição</h2>

<p>Este projeto acadêmico tem como objetivo principal oferecer uma ferramenta rápida e simples para a análise da saúde e bem-estar individual. A partir de dados fornecidos pelo usuário, o sistema realizará o cálculo da Taxa de Metabolismo Basal (TMB), do Índice de Massa Corporal (IMC) e do Consumo Diário de Água recomendado. Além disso, e de forma personalizada, o projeto irá sugerir um plano alimentar adaptado às preferências e necessidades do usuário.</p>

<h2>3. Funcionalidades Principais</h2>
<ul>
   <li>Cadastro e Login de Usuários: Sistema seguro para criação e autenticação de contas.</li>
   <li>Cálculos de Saúde:
      <ul>
         <li>Taxa de Metabolismo Basal (TMB)</li>
         <li>Índice de Massa Corporal (IMC)</li>
         <li>Consumo de Água Diário Ideal</li>     
      </ul></li>
   <li>Plano Alimentar Personalizado: Sugestão de dieta baseada nos objetivos e preferências do usuário.</li>
</ul>

<h2>4. Pré-requisitos</h2>
<p>Antes de começar, garanta que você tenha os seguintes softwares instalados em sua máquina:</p>
   <ul>
      <li>XAMPP: Um ambiente de servidor local que inclui Apache, MySQL e PHP.</li>
      <li>Git: Para clonar o repositório.</li>
      <li>Um navegador web: (ex: Google Chrome, Firefox).</li>
      <li>MySQL Workbench (Opcional, mas recomendado): Para gerenciar o banco de dados com mais facilidade.</li>
   </ul>

<h2>5. instalação e Execução do Projeto</h2>
<p>Siga este passo a passo para rodar o projeto em sua máquina local:</p>
<ul>
   <li>Passo 1, clonar o Repositório: Abra o seu terminal ou Git Bash e clone este repositório para o seu computador.</li>
   <li>Passo 2, mover a Pasta do Projeto:<ul>
   <li>Mova a pasta clonada  para dentro da pasta htdocs do seu XAMPP. O caminho padrão é: C:\xampp\htdocs\</li>
   <li>O caminho final do projeto deverá ser: C:\xampp\htdocs\NutriFacil\</li></ul></li>
   <li>Passo 3, iniciar o Servidor XAMPP:<ul> 
      <li>Abra o Painel de Controle do XAMPP e inicie os módulos Apache e MySQL.</li>
      <li>Se o MySQL falhar, edite o arquivo my.ini para usar uma porta alternativa 3307.</li></ul>
   </li>
   <li>Passo 4, importar o Banco de Dados: <ul>
      <li>O jeito mais fácil de configurar o banco de dados é importando o arquivo .sql que está neste repositório.</li>
      <li>Abra o MySQL Workbench e conecte-se ao seu servidor local.</li>
      <li>No menu superior, vá em File > Open SQL Script... e selecione o arquivo banco_de_dados.sql que está na pasta do projeto.</li>
   </li></ul>
   <li>Passo 5, Configurar a Conexão:</li><ul>
      <li>Para que o código PHP se conecte ao banco de dados, você precisa configurar suas credenciais.</li>
      <li>Na pasta do projeto, encontre o arquivo config.example.php.</li>
      <li>Faça uma cópia deste arquivo e renomeie a cópia para config.php.</li>
      <li>Abra o config.php e edite as seguintes linhas com as suas informações:<ul>
         <li>define('DB_PASSWORD', 'sua_senha_do_mysql_root');</li>
      </ul></li>
      <li>Importante: Se você precisou alterar a porta do MySQL no Passo 3 (ex: para 3307), você precisará ajustar a linha de conexão nos arquivos processar_cadastro.php e Serv_Login.php para incluir a porta:<ul>
         <li>Exemplo de alteração: "$conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME, 3307);"</li>
      </ul></li>
   </ul>   
   <li>Passo 6, acessar o Projeto:<ul>
      <li>Abra seu navegador e acesse o site.<ul>
         <li>Ex: http://localhost/NutriFacil/login.html</li>
      </ul></li>
   </ul></li>
</ul>

   
<h2>6. Uso do projeto</h2>

   <ol>
      <li>Criar sua Conta:<ul>
         <li>Clique em "Fazer Cadastro": Você encontrará essa opção na tela inicial do aplicativo.</li>
         <li>Preencha seus Dados Essenciais: Informe seu Nome completo, E-mail, crie uma Senha segura, selecione seu Gênero e insira sua Data de Nascimento e suas alergias.</li>
         <li>Certifique-se de que todas as informações estejam corretas para garantir a precisão dos cálculos.</li>
      </ul></li>
      <li>Informar Dados para Cálculos e Dieta<ul><li>Após o cadastro e login, você será direcionado(a) para uma seção onde precisará fornecer os dados necessários pros cálculos e pra personalização da sua dieta. Esses dados incluem:<ul>
         <li>Altura: Em centímetros (ex: 170).</li>
         <li>Peso: Em quilogramas (ex: 75.5).</li>
         <li>Objetivo: Escolha entre Emagrecimento ou Hipertrofia.</li>
         <li>Preferência de Alimento: Indique os tipos de alimentos que você gostaria de incluir ou evitar na sua dieta, como Proteína, Legume, Verdura ou Carboidrato.</li>
         <li>Tipo de Dieta: Selecione o estilo de dieta que mais se alinha com suas preferências, como Mediterrânea, Low Carb, Cetogênica ou Vegetariana.</li>
      </ul></li></ul></li>
      <li>Gerar Seus Resultados e Dieta<ul>
         <li>Com todas as informações preenchidas, o sistema processará os dados e apresentará instantaneamente:<ul>
            <li>Sua Taxa de Metabolismo Basal (TMB).</li>
            <li>Seu Índice de Massa Corporal (IMC), com uma classificação indicativa.</li>
            <li>A recomendação de Consumo Diário de Água.</li>
            <li>Uma Dieta Personalizada adaptada aos seus objetivos e preferências, com sugestões de refeições para o café da manhã, almoço, jantar e lanches.</li>
         </ul>
         </li>
      </ul></li>
   </ol> 
   
<h2>7. Inclusão de créditos</h2>
<p>Vanderson Henrique da Silva Correia Filho | https://github.com/VandersonHenrique<br>
Fernando Rufino Barcelos | https://github.com/fernandorufinobarcelos<br>
Ícaro de lima Wanzeler | https://github.com/IcaroLW<br>
Emilli Giuliane Pereira Lima | https://github.com/Emilli-Giuliane
</p>

<h2>8. Inclusão de uma licença</h2>
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
