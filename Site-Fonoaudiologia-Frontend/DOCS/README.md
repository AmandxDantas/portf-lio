# TRABALHO-SITE
Este projeto apresenta uma página web sobre "Fonoaudiologia", desenvolvida como parte de um trabalho acadêmico dos cursos de Analise desenvolvimento de sistemas e ciencias da computação.

O objetivo é a criação de um site sobre Fonoaudiologia, em conjunto com o projeto "fononaunicid".


**Funções**
Natham = Programador Responsavel pelo CSS e Java, Pesquisa de informações.
Geovana = Programadora Responsavel pelo HTML, Pesquisa de informações.
Victoria = Programadora Responsavel pelo CSS, Pesquisa de informações.
Amanda = Programadora Responsavel pelo Html, Pesquisa de informações.
Lucas = Programador Responsavel pelo README, Pesquisa de orçamento e hospedagem.
Franklin = Programadora Responsavel pelo CSS, Pesquisa de informações.

**Diário de Bordo**

Tivemos dificuldade em relação à semântica e ao tema do site, pois inicialmente optamos por desenvolver um site sobre o projeto Sorria Unicid (projeto de odontologia da própria Unicid). Porém, demoramos para começar, de fato, a programar o site, devido à burocracia envolvida, já que precisávamos de várias autorizações. Isso causou um atraso no início do projeto. Não conseguimos a autorização para a criação do site de odontologia, porém nos foi dada a opção de trabalhar com o tema fonoaudiologia, e optamos por seguir com ele.

Após tudo estar em conformidade, conseguimos desenvolver o projeto de forma contínua. Entretanto, apenas nós cinco contribuímos de forma relevante para o trabalho, com exceção do Franklin, que estava sem internet em casa. Porém, na reunião realizada no dia 09/10, ele compareceu à chamada. Tínhamos também dois membros no grupo que não demonstraram o mínimo de interesse pelo curso: um acabou trancando a matrícula, e o outro decidimos remover do grupo.

Nos dias 25/10 e 26/10 foram realizadas as implementações por parte dos programadores, inserindo as páginas de benefícios e serviços, além de estruturar o HTML junto ao CSS. Foi uma tarefa árdua e desafiadora, pois estávamos ficando sem tempo hábil para a entrega. Porém, após várias xícaras de café e noites em claro, conseguimos um HTML responsivo e funcional. Ainda faltava implementar o CSS, mas, devido ao calendário, demoramos um pouco para aprender o conteúdo em aula. Assim que aprendemos, mergulhamos completamente na sua programação e conseguimos desenvolver um site praticamente completo (com exceção do back-end).

Nos dias 01/11 e 02/11 foram finalizadas as implementações do CSS e do JavaScript, inserindo o carrossel, as imagens e a página da clínica.




**Dominios disponiveis** Verificado pelo site (www.hostgator.com.br)
fononaunicid.com.br // R$:9,99
fononaunicid.net.   // R$:36,90
fononaunicid.com    // R$:28,99



**Hospedagem disponivel**
HOSTINGER // R$:5,99/MÊS
HOSTGATOR // R$:7,79/MÊS
DREAMHOST //  $:2,99/MÊS



Abaixo a explicação de como foi estruturado o codigo.

**Estrutura do Projeto**

RATS/
 ├── ASSENTS/
 │   └── Politica_de_Privacidade.pdf      // Documento de política de privacidade
 │
 ├── CSS/
 │   └── style.css                        // Estilos principais do site
 │
 ├── DOCS/
 │   ├── .gitattributes                   // Configuração do Git
 │   └── README.md                        // Documentação
 │
 ├── HTML/
 │   ├── P_inicial.html                   // Página inicial
 │   ├── P_agendamento.html               // Página de agendamento
 │   ├── P_beneficios.html                // Página informativa
 │   ├── P_clinica.html                   // Página sobre a clínica
 │   ├── P_confirmacao.html               // Página de confirmação
 │   ├── P_contato.html                   // Página de contato
 │   └── P_2.html                         // Página de serviços 
 ├── IMG/                                 // Diretório de imagens
 │
 └── JS/
     ├── Celebro.js
     ├── Celebro2.js
     ├── Celebro3.js
     └── Celebro4.js                      // Scripts utilizados no site




O desenvolvimento do site foi realizado com base em boas práticas de design responsivo.
Foram utilizadas tecnologias HTML5 e CSS3, com foco em acessibilidade e clareza visual.


## ASSENTS ##

// Documento de política de privacidade

## CSS ##

//VISÃO GERAL

Esse CSS organiza um site responsivo com:

Cabeçalho (menu) que vira dropdown e menu hambúrguer no celular.

Efeitos de hover e animações.

Cards, banners e seções com layout flex e grid.

Rodapé responsivo.

Ajustes específicos para telas menores com @media queries.

São 1490 linhas de codigo, fica impossivel de escrever o que cada um faz, porém ai está um resumo.



1. Configuração Universal

{
  margin: 0px;
  font-family: Arial, Helvetica, sans-serif;
}


//Remove a margem padrão de todos os elementos.

//Define a fonte padrão do site.

2. Logo e Cabeçalho
.logop {
  display: flex;
  background-color: #ffffff;
  height: 100px;
}

.logop .logo{
  height: 100px;
  padding: 0px 90px;
}


//Organiza a área onde fica a logo, usando flex.

.cabeçalho {
  display: flex;
  align-items:last baseline;
  background-color: #ffffff;
  height: 105px;
  border-bottom: 2px solid #1911a4;
  margin-top: 30px;
}


//Define o menu superior, com borda e posição dos itens.

3. Responsividade para Celular
@media (max-width: 542px) {
  .logop .logo {
    padding: 0px 20px;
    height: 80px;  
  }
  .cabeçalho {
    margin-top: 10px;
  }
}


//Quando a tela fica pequena, o layout se ajusta (logo menor e menu mais compacto).

4. Menu de Navegação
Botão escondido no PC
#botao {
  display: none;
}

Menu padrão (desktop)
#menu {
  display: flex;
}

Setinha de menu dropdown
.serv::after {
  content: "˅";
}

No celular
@media (max-width: 542px) {
  #botao {
    display: block;
    ... // botão aparece
  }
  #menu {
    display: none; // menu some
    flex-direction: column;
    ...
  }
  #menu.mostrar {
    display: flex; // menu aparece quando clicado
  }
}


//Aqui acontece o menu hambúrguer: só aparece quando o usuário clica no botão.

5. Submenu (Dropdown no Desktop)
.submenu {
  display: none;
  position: absolute;
  background: #ffffff;
  grid-template-columns: repeat(4, 1fr);
}
.dropdown:hover .submenu {
  display: grid;
  animation: subir 0.7s ease;
}


//No computador, quando o mouse passa em cima, o submenu aparece como um grid animado.

No celular, ele some:

@media (max-width: 542px) {
  .dropdown:hover .submenu {
    display: none;
  }
}

6. Rodapé
footer {
  background-color: #f4f4f4;
  padding: 40px 0;
  border-top: 2px solid #1911a4;
}
.footer_container {
  display: flex;
  justify-content: space-between;
}


//Layout flex para organizar informações, redes sociais e logos de apoio.

No celular:

@media (max-width: 542px) {
  .footer_container {
    display: grid;
  }
}


//Tudo fica em coluna, para caber na tela.

7. Banner (Página Inicial)
.banner {
  background: linear-gradient(to right, #1911a4,#38e0dc);
  display: flex;
  align-items: center;
}
.banner img {
  position: absolute;
  right: 10px;
  height: 130%;
}


//Banner com degradê

Texto de um lado, imagem ajustada posicionada no canto

Em telas pequenas, a imagem some:

@media (max-width: 1390px) {
  .banner img {
    display: none;
  }
}

8. Cards Interativos
.card_inicio {
  background: linear-gradient(...);
  border-radius: 15px;
  transition: all 0.3s ease;
}
.card_inicio:hover .info {
  max-height: 350px;
  opacity: 1;
}


// Os cards têm efeito de expandir ao passar o mouse.

9. Seções Com Grid e Flex

Ex.: serviços, benefícios, clínica, carrossel
→ Todas usam display: flex ou display: grid para organização visual.

10. Formulário (Contato/Agendamento)
.formulario input, select, textarea {
  border-radius: 8px;
  border: 1px solid #666;
}
.input-box label {
  position: absolute;
  ...
}



RESUMO GERAL
| Área         | Função                                 |
| ------------ | -------------------------------------- |
| * { }        | Define estilo base                     |
| Menu Desktop | Horizontal com dropdown                |
| Menu Mobile  | Botão hambúrguer + animação de entrada |
| Banner       | Degradê + imagem posicionada           |
| Cards        | Animação e hover                       |
| Footer       | Organizado e responsivo                |
| Formulário   | Labels animadas                        |


## DOCS##

.gitattributes                   // Configuração do Git
README.md                        // Documentação

## HTML ##

**PAGINA DE SERVIÇOS (P_2)**..................................................................

1) Estrutura Básica do Documento
<!DOCTYPE html>


//Diz ao navegador que este arquivo é um documento HTML5.

<html lang="pt">


Início da página HTML.

//lang="pt" informa que o idioma do conteúdo é português.

2) Cabeçalho da Página (<head>)
<head>


//Começo da área de configuração (não é conteúdo visível).

<link rel="icon" type="image/png" href="../IMG/logo_icon.png">


//Define o ícone do site (o que aparece na aba do navegador).

<meta charset="utf-8">


//Define a codificação de caracteres para UTF-8 (permite acentos).

<meta name="viewport" content="width=device-width, initial-scale=1.0">


//Faz o site se adaptar a celulares (responsividade).

<link rel="stylesheet" href="../CSS/style.css">


//Importa o arquivo de estilos CSS externo.

<script src="https://kit.fontawesome.com/b22d1c7e76.js" crossorigin="anonymous"></script>


//Importa ícones do Font Awesome (ícones de casa, telefone, coração, etc).

<title>Fonoaudiologia Unicid - comunica, cuidar e previnir</title>


//Define o título que aparece na aba do navegador.

3) Plugin VLibras (Acessibilidade)
<div vw class="enabled">
  <div vw-access-button class="active"></div>
  <div vw-plugin-wrapper>
    <div class="vw-plugin-top-wrapper"></div>
  </div>
</div>


//Bloco necessário para o plugin VLibras (interpretação em Libras).

<script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>


//Carrega o script do VLibras.

<script>
  new window.VLibras.Widget('https://vlibras.gov.br/app');
</script>


//Ativa o plugin na página.

</head>



4) Cabeçalho Visível do Site (<header>)
<header> 

<nav class="cabeçalho">


//Inicia o menu de navegação.

<div class="logop">
  <a href="P_inicial.HTML">
    <img class="logo" src="../IMG/logo2.png" alt="logo do site: Fonoaudiologia UNICID">
  </a> 
</div>


//Mostra o logo clicável que redireciona para a página inicial.

<button id="botao">☰</button>


//Botão para abrir/fechar menu em celulares (menu hamburguer).

<ul id="menu">


//Começa a lista de links do menu.

//Cada <li> é um item do menu.
//Cada <a> é um link de navegação.

Exemplo:

<li><a href="P_inicial.HTML" class="ativo"><i class="fa-solid fa-house"></i>Início</a></li>


//Link com ícone → página inicial.

<li class="dropdown">
  <a href="P_2.html" class="serv" class="ativo"><i class="fa-solid fa-hand-holding-heart"></i>Serviços</a>


//Item com submenu.

//O submenu:

<ul class="submenu">
  <li><a href="P_2.html#Audiologia">Audiologia</a></li>
  ...
</ul>


//Quando passa o mouse ou toca, aparece essa lista.

</nav>
</header>


//Fecha o menu e o cabeçalho.

5) Conteúdo Principal (<main>)
<main>


//A página é dividida em seções, cada uma representa uma área da fonoaudiologia.

Exemplo de seção:

<section id="Audiologia" class="container_servico"> 
  <h1>Audiologia</h1> 


//id="Audiologia" permite que links do menu levem direto até aqui.

//h1 é o título da seção.

//Dentro dela:

<div class="grid">
  <div class="card_servico"> 
    <h2>Avaliação auditiva:</h2>
    <p>Realização de testes como a audiometria para avaliar a capacidade de audição do paciente.</p>
  </div>


;;grid define um layout em colunas.

c//ard_servico é cada bloco informativo.

Es//se padrão se repete em todas as áreas:
Audiologia, Linguagem, Voz, Disfagia, etc.

6) Rodapé (<footer>)
<footer>

<div class="footer_container">


//Contêiner do rodapé.

<div class="partelogorodape">
  <img src="../IMG/logo2.png">
  <img src="../IMG/logo_unicid.png">
</div>


//Mostra os logos do site e da universidade.

<div class="social">
  <h3>Siga-nos</h3>
  <a href="..." target="_blank"><i class="fa-brands fa-instagram"></i></a>


//Links para redes sociais.

<div class="contato">
  <h3>Contato</h3>
  <p>Endereço / telefone / e-mail</p>
</div>


//Informações de contato.

**PAGINA DE AGENDAMENTOS**..................................................................




<div>
    <span class="palavra"></span>
</div>
// Um <span> com classe .palavra — provavelmente usado por JavaScript para inserir/animar uma palavra ou frase dinamicamente (ex.: texto rotativo).


<button id="botao">☰</button>
// Botão com o ícone “hamburger” (☰), usado em layouts responsivos para abrir/fechar o menu em telas pequenas. Id #botao refere-se a ele no CSS/JS.


<ul id="menu">
// Início da lista não ordenada que contém os itens do menu. id="menu" permite controle via CSS/JS.


<li><a href="P_inicial.HTML" class="ativo"><i class="fa-solid fa-house"></i>Início</a></li>
// Primeiro item do menu: link para a página inicial. Usa um ícone (<i> com classes Font Awesome). class="ativo" pode marcar visualmente o item atual.

<li class="dropdown">
// Item de menu que funciona como dropdown (contém submenu). A classe .dropdown usada para ativar o comportamento via CSS/JS.


<a href="P_2.html" class="serv" class="ativo"><i class="fa-solid fa-hand-holding-heart"></i>Serviços</a>
// Link principal do item dropdown que leva a P_2.html. Observação técnica: há duas vezes class="..." (duplicado) — isso é inválido; o correto seria class="serv ativo" (colocar ambas classes no mesmo atributo). Mesmo assim navegadores normalmente usam a última ocorrência.

<ul class="submenu">
// Início do submenu — lista interna de links de ancoragem para seções específicas.


<li><a href="P_2.html#Audiologia">Audiologia</a></li>
<li><a href="P_2.html#Linguagem">Linguagem</a></li>
<li><a href="P_2.html#M.O">Motricidade Orofacial</a></li>
<li><a href="P_2.html#Voz">Voz</a></li>
<li><a href="P_2.html#Disfagia">Disfagia</a></li>
<li><a href="P_2.html#Saúde_Coletiva">Saúde Coletiva</a></li>
<li><a href="P_2.html#F_Educacional">Fonoaudiologia Educacional</a></li>
<li><a href="P_2.html#Gerontologia">Gerontologia</a></li>
<li><a href="P_2.html#Neurofuncional">Neurofuncional</a></li>
<li><a href="P_2.html#Fluência">Fluência</a></li>
<li><a href="P_2.html#F_do_Trabalho">Fonoaudiologia do Trabalho</a></li>
<li><a href="P_2.html#Neuropsicologia">Neuropsicologia</a></li>
<li><a href="P_2.html#Perícia_F.">Perícia Fonoaudiológica</a></li>
<li><a href="P_2.html#Hospitalar">Hospitalar</a></li>
// Cada <li> dentro do submenu é um link de ancoragem que aponta para uma seção específica (#Audiologia, #Linguagem, etc.) na página P_2.html. Esses links permitem saltar diretamente para essas seções.


</ul>
</li>
// Fecha o submenu e o item dropdown.

<li><a href="P_beneficios.html" class="ativo"><i class="fa-solid fa-heart"></i>Beneficios</a></li>
// Item de menu que leva à página de benefícios; inclui ícone de coração.


<li><a href="P_clinica.html" class="ativo"><i class="fa-solid fa-hospital"></i>Clínica Unicid</a></li>
// Link para a página da clínica; inclui ícone de hospital.


<li><a href="P_agendamento.html" class="ativo"><i class="fa-solid fa-calendar"></i>Agendamento</a></li>
// Link para a página de agendamento; inclui ícone de calendário.


<li><a href="P_contato.html" class="ativo"><i class="fa-solid fa-phone"></i>Contato</a></li>
// Link para a página de contato; inclui ícone de telefone.


</ul>
</nav>
</div>
</header>
// Fecha a lista do menu, a nav, um div extra (há um </div> que fecha um container — provavelmente corresponde ao .logop? — verifique que todos div abertos tenham seus correspondentes </div>), e finalmente fecha o header. (Observação: ter </div> depois de </nav> pode indicar um <div> aberto antes do nav — no seu segundo arquivo você tinha fechamentos coerentes; sempre confira pares de abertura/fechamento no editor.)


<section class="img_formulario">
// Seção que exibe um fundo/banner (classe .img_formulario): aqui fica a área do formulário de agendamento.


<div class="container_cont_texto">
// Container para o texto introdutório do formulário.

<h1>Agende sua consulta!</h1>
// Título grande (h1) convidando o usuário a agendar.

<p>Preecha com os seus dados os campos abaixo e encontraremos o melhor horario para você!</p>
// Parágrafo explicativo com instruções para o usuário (pequeno texto auxiliar). Observação de digitação: "Preecha" → ortografia correta: "Preencha"; "horario" → "horário".


</div>
// Fecha o container de texto.

<form id="form" action="../HTML/P_confirmacao.html" method="POST" class="formulario">
// Início do formulário: id="form" para manipulação via JS, action aponta para a página de confirmação (onde os dados são enviados), method="POST" indica envio via POST, e class="formulario" para estilo.


<div class="linha">
// Bloco que agrupa campos em linha (possivelmente grid de duas colunas via CSS).

<div class="input-box">
    <input type="text" id="nome" maxlength="100" required>
    <label class="campo_input" for="nome">Nome</label>
</div>
// Campo de texto para Nome: maxlength limita 100 caracteres; required obriga preenchimento. O label com for="nome" melhora acessibilidade e provavelmente tem efeito "flutuante" via CSS/JS.


<div class="input-box">
    <input type="text" id="cpf"  mixlength="11" required>
    <label class="campo_input" for="cpf">CPF</label>
</div>
// Campo para CPF: observe um erro de atributo — mixlength="11" não existe; o correto seria maxlength="11" (ou pattern/mask). required obriga preenchimento. Corrija mixlength para maxlength para que a limitação funcione.


</div>
// Fecha a primeira linha de inputs.


<div class="linha">
// Segunda linha de inputs.


<div class="input-box">
    <input type="date" id="data_nasc" min="1900-01-01" max="2060-12-31" required>
    <label class="campo_input" for="data_nasc">Data de Nascimento</label>
</div>
// Campo do tipo date para data de nascimento com limites min e max e required. O label está posicionado para o estilo flutuante.


<div class="input-box"> 
    <label for="Genero">Genêro:</label>
    <select id="genero" name="Genero">
        <option value="">Selecione um Gênero</option>
        <option value="Feminino">Feminino</option>
        <option value="Masculino">Masculino</option>
        <option value="Pessoa não-binária">Pessoa não-binária</option>
        <option value="Prefiro não responder">Prefiro não responder</option>
    </select>
</div>
// Campo select para Gênero: id="genero" e name="Genero" (nome usado ao submeter). A primeira <option value=""> é placeholder vazio; as demais são opções reais.


</div>
// Fecha a segunda linha de inputs.


<div class="linha">
// Terceira linha de inputs.


<div class="input-box">
    <input type="email" id="email" name="email" required>
    <label class="campo_input" for="email">Email</label>
</div>
// Campo email que valida formato de email automaticamente no HTML5; required exige preenchimento.


<div class="input-box">
    <input type="tel" id="telefone" name="telefone" maxlength="15" required>
    <label class="campo_input" for="telefone">Celular ou Telefone fixo</label>
</div>
// Campo tel para telefone; maxlength="15" limita caracteres (útil para máscara). required força preenchimento.


</div>
// Fecha a terceira linha.


<div class="linha">
    <div class="input-box2">
        <label for="servicos">Serviços</label>
        <select class="servicos_agendamento" id="servicos" name="servicos" required>
            <option value="">Selecione um serviço:</option>
            <option value="Avaliação de linguagem (oral e escrita)">Avaliação de linguagem (oral e escrita)</option>
            <option value="Avaliação de fala e articulação">Avaliação de fala e articulação</option>
            <option value="Avaliação auditiva / auditivo-verbal">Avaliação auditiva / auditivo-verbal</option>
            <option value="Avaliação de disfagia (engolir)">Avaliação de disfagia (engolir)</option>
            <option value="Avaliação de funções orofaciais">Avaliação de funções orofaciais</option>
            <option value="Avaliação cognitiva e de memória">Avaliação cognitiva e de memória</option>
            <option value="Acompanhamento escolar / apoio pedagógico">Acompanhamento escolar / apoio pedagógico</option>
            <option value="Consultoria em leitura labial">Consultoria em leitura labial</option>
            <option value="stimulação cognitiva e reabilitação neuropsicológica">Estimulação cognitiva e reabilitação neuropsicológica</option>
            <option value="Exercícios para respiração e voz">Exercícios para respiração e voz</option>
            <option value="Orientação e aconselhamento familiar">Orientação e aconselhamento familiar</option>
            <option value="Prevenção e higiene vocal">Prevenção e higiene vocal</option>
            <option value="Terapia de linguagem infantil">Terapia de linguagem infantil</option>
            <option value="Terapia de linguagem adulta">Terapia de linguagem adulta</option>
            <option value="Terapia de fala e articulação">Terapia de fala e articulação</option>
            <option value="Terapia de voz">Terapia de voz</option>
            <option value="Terapia miofuncional (hábitos orais, postura da língua, respiração)">Terapia miofuncional (hábitos orais, postura da língua, respiração)</option>
            <option value="Terapia de disfagia">Terapia de disfagia</option>
            <option value="Terapia auditiva / reabilitação auditiva">Terapia auditiva / reabilitação auditiva</option>
            <option value="Treinamento de habilidades sociais e comunicação">Treinamento de habilidades sociais e comunicação</option>
            <option value="Treinamento de pronúncia e comunicação clara">Treinamento de pronúncia e comunicação clara</option>
        </select>
    </div>
</div>

// Bloco grande: select com muitas <option> que permite ao usuário escolher qual serviço deseja. Cada <option> tem value (o valor enviado no form) e texto visível. Observação: uma opção tem value começando com minúscula "stimulação..." enquanto o texto começa com maiúscula — padronize se desejar. required garante escolha. Use name consistente para backend/readability.


<div class="checkbox_container">
    <label class="checkbox_label">
        <input type="checkbox" name="consentimento" required>
        <span>Autorizo o uso dos meus dados para fins de contato.</span>
    </label>
    
    <label class="checkbox_label">
        <input type="checkbox" name="termos" required>
        <span>Li e aceito os <a href="../ASSENTS/Politica_de_Privacidade.pdf" target="_blank">termos de uso e a política de privacidade</a>.</span>
    </label>
</div>
// Grupo de checkboxes: primeiro é consentimento geral para uso de dados; segundo é aceite de termos/política com link para PDF. Ambos têm required, então usuário precisa marcar ambos para submeter. target="_blank" abre o PDF em nova aba.


<div class="container_botão">
    <button type="submit">Avançar</button>
</div>
// Botão de envio do formulário (type="submit"). Ao clicar o form é submetido para a action definida (P_confirmacao.html) via POST.


</form>
</section>
// Fecha o form e a seção .img_formulario.


<footer>
// Início do rodapé com informações adicionais e logos.


<div class="footer_container">
    <div class="partelogorodape">
        <img src="../IMG/logo2.png" alt="logo do site: Fonoaudiologia UNICID">
        <img src="../IMG/logo_unicid.png" alt="logo da instituição de ensino: UNICID">
    </div>
// Contêiner com logos da clínica e da universidade; alt importante para acessibilidade.


<div class="parteinformacoesrodape">
    <div class="social">
        <h3>Siga-nos</h3>
        <a href="https://www.instagram.com/fononaunicid" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.youtube.com/@FonoNaUnicid" target="_blank"><i class="fa-brands fa-youtube"></i></a>
    </div>
// Bloco de redes sociais com links que abrem em nova aba; ícones via Font Awesome.


<div class="contato">
    <h3>Contato</h3>
    <p>Rua das Flores, 123/321 - Tatuapé, São Paulo - SP, 09999-999</p>
    <p>(11) 99999-9999</p>
    <p>contato@exemplo.com</p>
</div>
// Informações de contato: endereço, telefone e e-mail. Atualize para dados reais quando necessário.


<div class="apoio">
    <h3>Apoiadores</h3>
    <div class="logos">
        <img src="../IMG/Audibel.png" alt="Audibel">
        <img src="../IMG/Booktoy.png" alt="Booktoy">
        <img src="../IMG/PróFono.png" alt="Pró-Fono">
        <img src="../IMG/ABRAMO.png" alt="Abramo">
        <img src="../IMG/Thieme.png" alt="Thieme">
    </div>
</div>
// Mostra logos de apoiadores/parceiros; geralmente exibidas em escala reduzida e com hover para destaque no CSS.

</div> <!-- fecha parteinformacoesrodape -->
</div> <!-- fecha footer_container -->
// Fecha os contêineres do rodapé.


<div class="copy">
    <p>Copyright © 2025 • Fonoaunicíd • Todos os direitos reservados.</p>
</div>
// Aviso de copyright; atualize o ano/nome conforme necessário.

</footer>
// Fecha o rodapé.


<script src="../JS/Celebro3.js"></script>
// Importa um script JavaScript (controla validações do formulário, o menu hambúrguer, a animação da .palavra, etc.). 


</body>
</html>
// Fecha o body e o documento HTML.

**PAGINA DE BENEFICIOS**..................................................................

<main>
    // A tag <main> indica o conteúdo principal da página.
            
    <section class="Textosb">
        // Cada <section> representa um bloco de conteúdo.
        // A classe "Textosb" provavelmente define estilo de texto e espaçamento.

        <h2>Comunicação e Expressão:</h2>
        // Título da seção.

        <div class="container_bene">
        // Este <div> serve como um contêiner para organizar os itens de benefício.

            <div class="beneficio">
                // Cada <div class="beneficio"> representa uma caixinha de texto.
                <p>Desenvolve a compreensão da linguagem...</p>
                // Texto explicativo dentro da caixa.
            </div>

            <div class="beneficio">
                <p>Ajuda na adequação do vocabulário...</p> 
            </div>   

            <div class="beneficio">
                <p>Melhora a expressão oral e escrita...</p>
            </div>

            <div class="beneficio">
                <p>Estimula o desenvolvimento da fala...</p>
            </div>
        </div>

        <div class="container_bene_img">
            // Esta div é responsável pela imagem ao lado dos textos.
            <img src="../IMG/comunicacao.jpg" alt="sda">
            // src aponta para a imagem na pasta /IMG
            // alt descreve a imagem (para acessibilidade).
        </div>
    </section>


    <section class="Textosb">
        // Segunda seção, mesma estrutura da primeira, apenas mudando o conteúdo.

        <h2>Desenvolvimento Infantil:</h2>

        <div class="container_bene">
            <div class="beneficio">
                <p>Trabalha hábitos orais inadequados...</p>
            </div>

            <div class="beneficio">
                <p>Estimula o desenvolvimento da fala...</p>
            </div>

            <div class="beneficio">
                <p>Favorece a aquisição da leitura...</p> 
            </div>   

            <div class="beneficio">
                <p>Melhora a expressão oral e escrita...</p>
            </div>
        </div>
        
        <div class="container_bene_img">
            <img src="../IMG/infantil.jpg" alt="sda">
        </div>
    </section>


    <section class="Textosb">
        // Terceira seção: Voz e saúde vocal.

        <h2>Voz e Saúde Vocal:</h2>

        <div class="container_bene">

            <div class="beneficio">
                <p>Ensina técnicas de uso saudável da voz...</p>
            </div>

            <div class="beneficio">
                <p>Favorece a aquisição da leitura e escrita... e melhora a projeção vocal.</p> 
            </div>   

            <div class="beneficio">
                <p>Promove a reabilitação vocal...</p>
            </div>

            <div class="beneficio">
                <p>Previne e trata problemas vocais...</p>
            </div>
        </div>

        <div class="container_bene_img">
            <img src="../IMG/vocal.jpg" alt="sda">
        </div>
    </section>


    <section class="Textosb">
        // Quarta seção.

        <h2>Funções Cognitivas e Reabilitação Neurológica:</h2>

        <div class="container_bene">
            <div class="beneficio">
                <p>Corrige alterações na mastigação e deglutição...</p>
            </div>

            <div class="beneficio">
                <p>Trabalha a coordenação entre respiração e deglutição...</p> 
            </div>   

            <div class="beneficio">
                <p>Promove a respiração nasal adequada...</p>
            </div>

            <div class="beneficio">
                <p>Melhora o tônus e mobilidade dos músculos orofaciais...</p>
            </div>
        </div>

        <div class="container_bene_img">
            <img src="../IMG/reabilitacao.jpg" alt="sda">
        </div>
    </section>

</main>


**PAGINA DA CLINICA**..................................................................

<main>
    // A tag <main> contém o conteúdo principal da página.

    <section class="historia_section">
        // Esta seção apresenta a história da clínica.

        <h2>Nossa História</h2>
        // Título da seção.

        <div class="container_geral">
        // Contêiner geral para organizar o texto e o carrossel lado a lado.

            <div class="container_clinica">
            // Contêiner específico para o bloco do texto.

                <div class="historia">
                // Este <div> contém o texto explicativo sobre a história da clínica.

                    <p>A Clínica Escola de Fonoaudiologia da UNICID nasceu em 2005...</p>
                    // O parágrafo conta a história, missão e atividades da clínica.
                </div>
            </div>

            <div class="carrossel">
            // Este bloco representa o carrossel de imagens (galeria que desliza).

                <div class="carrossel_container">
                // Contêiner que agrupa todas as imagens; ele se move horizontalmente via CSS + JS.

                    <img src="../IMG/img clinica6.jpeg" alt="Uma foto da entrada da clinica de Fonoaudiologia">
                    // Cada <img> exibe uma imagem da clínica.
                    // O atributo alt descreve a imagem para acessibilidade e SEO.

                    <img src="../IMG/img clinica7.jpeg" alt="Uma foto da área de espera da recepção da clinica vista de fora">
                    <img src="../IMG/img clinica1.jpeg" alt="Uma foto da área de espera da recepção da clinica vista de dentro">
                    <img src="../IMG/img clinica5.jpeg" alt="Uma foto da sala de Otoneurologia vista de fora">
                    <img src="../IMG/img clinica2.jpeg" alt="Uma foto da sala de Ludateca vista de fora">
                    <img src="../IMG/img clinica3.jpeg" alt="Uma foto de cabine para avaliação audiologica vista por fora">
                    <img src="../IMG/img clinica4.jpeg" alt="Uma foto de cabine para avaliação audiologica vista por dentro">
                </div>

                <button class="anter">&#10094;</button>
                // Botão de navegação para imagem anterior no carrossel.
                // O conteúdo &#10094; é um símbolo de seta (‹).

                <button class="prox">&#10095;</button>
                // Botão de navegação para próxima imagem no carrossel.
                // O conteúdo &#10095; é outro símbolo de seta (›).
            </div>
        </section>

        <div class="container_mapa">
        // Contêiner para a seção do mapa da localização.

            <h2>Onde estamos:</h2>
            // Título indicando que abaixo vem o mapa.

            <section class="mapa">
            // Seção que envolve o mapa propriamente dito.

                <iframe 
                // <iframe> incorpora uma página externa dentro do site.
                // Neste caso, é um mapa do Google Maps.

                    src="https://www.google.com/maps/embed?pb=..."
                    // URL fornecida pelo próprio Google Maps para exibir o endereço.

                    style="border:0;"
                    // Remove borda ao redor do iframe.

                    allowfullscreen=""
                    // Permite colocar em tela cheia caso o Google Maps ofereça essa opção.

                    loading="lazy"
                    // Faz com que o mapa carregue só quando chegar perto da tela (melhora desempenho).

                    referrerpolicy="no-referrer-when-downgrade">
                    // Política de privacidade de navegação recomendada.
                </iframe>

            </section>
        </div>

</main>


**PAGINA DE CONFIRMAÇÃO**..................................................................

<main>
    // <main> representa o conteúdo principal da página.

    <form class="container_formalario_confir">
    // <form> é o formulário onde os dados serão enviados.

        <div class="container_confir_total">
        // Este <div> agrupa todo o conteúdo da página (dados + inputs).

            <section class="container_confir">
            // Esta seção mostra os dados que já foram preenchidos anteriormente.
            // Eles são exibidos aqui só para confirmação antes do envio.

                <div class="linha_confir">
                // Cada .linha_confir organiza duas informações lado a lado.

                    <p>Nome: <span id="nome"></span></p>
                    // <span id="nome"> será preenchido dinamicamente via JavaScript com o nome inserido antes.
                    
                    <p>Email: <span id="email"></span></p>
                    // Mesmo caso: o e-mail será colocado aqui automaticamente.
                </div>

                <div class="linha_confir">
                    <p>Telefone: <span id="telefone"></span></p>
                    <p>Idade: <span id="idade"></span></p>
                </div>

                <div class="linha_confir">
                    <p>Data de Nascimento: <span id="data_nasc"></span></p>
                    <p>Serviço: <span id="servicos"></span></p>
                </div>

                <div class="linha_confir">
                    <p>Gênero: <span id="genero"></span></p>
                    <p>CPF: <span id="cpf"></span></p>
                </div>
            </section>
            
            <section class="container_input_confir">
            // Esta parte coleta informações adicionais antes do envio final.

                <div id="dados_responsavel" style="display: none;">
                // Este bloco só aparece se a pessoa for menor de idade.
                // O JavaScript ativa ou desativa ele dependendo da idade.

                    <h2>Dados do Responsável</h2>

                    <label for="nome_responsavel">Nome do Responsável:</label>
                    <input type="text" id="nome_responsavel" name="nome_responsavel" maxlength="100" required>

                    <label for="tel_responsavel">Telefone do Responsável:</label>
                    <input type="tel" id="tel_responsavel" name="tel_responsavel" required>

                    <label for="email_responsavel">E-mail do Responsável:</label>
                    <input type="email" id="email_responsavel" name="email_responsavel" required>

                    <label for="cpf_resposavel">CPF:</label>
                    <input type="text" id="cpf_resposavel" name="cpf_resposavel" required>

                    <label>Grau de parentesco</label>
                    <select id="responsavel_parentesco" name="responsavel_parentesco" required>
                        <option value="">Selecione</option>
                        <option>Pai</option>
                        <option>Mãe</option>
                        <option>Avô/Avó</option>
                        <option>Tutor</option>
                        <option>Outro</option>
                    </select>
                </div>

                <h2>Informações sobre a Saúde</h2>
                // Título da sessão de informações médicas.

                <label>Condições de saúde (selecione as que se aplicam):</label>
                <div class="checkbox-group">
                // Grupo de checkboxes onde você pode marcar mais de uma condição.
                    <label><input type="checkbox" name="condicao" value="Asma">Asma</label>
                    <label><input type="checkbox" name="condicao" value="Alergias">Alergias</label>
                    <label><input type="checkbox" name="condicao" value="Diabetes">Diabetes</label>
                    <label><input type="checkbox" name="condicao" value="Problemas auditivos">Problemas auditivos</label>
                    <label><input type="checkbox" name="condicao" value="Outros">Outros</label>
                </div>

                <div style="margin-top:10px;">
                    <label>Outras condições de saúde (opcional)</label>
                    <textarea name="outras_condicoes" placeholder="Descreva se houver outras condições..."></textarea>
                </div>

                <div style="margin-top:20px;">
                    <label>Queixa principal ou motivo da consulta</label>
                    <textarea name="queixa" placeholder="Descreva brevemente o motivo do atendimento..." required></textarea>
                </div>

                <div style="margin-top:20px;">
                    <label>Histórico médico relevante</label>
                    <textarea name="historico" placeholder="Ex.: otites, dificuldades de fala, alergias..."></textarea>
                </div>

                <div style="margin-top:20px;">
                    <label>Uso de medicamentos</label>
                    <div class="checkbox-group">
                    // Aqui a pessoa só pode escolher "Sim" ou "Não".
                        <label><input type="radio" name="medicamentos" value="Sim">Sim</label>
                        <label><input type="radio" name="medicamentos" value="Não">Não</label>
                    </div>
                    <textarea name="descricao_medicamentos" placeholder="Se sim, descreva quais..."></textarea>
                </div>

                <div style="margin-top:20px;">
                    <label>Já fez acompanhamento fonoaudiológico antes?</label>
                    <div class="checkbox-group">
                        <label><input type="radio" name="acompanhamento" value="Sim">Sim</label>
                        <label><input type="radio" name="acompanhamento" value="Não">Não</label>
                    </div>
                </div>

                <div style="margin-top:20px;">
                    <label>Diagnósticos prévios (se houver):</label>
                    <div class="checkbox-group">
                        <label><input type="checkbox" name="diagnostico" value="TDAH">TDAH</label>
                        <label><input type="checkbox" name="diagnostico" value="Autismo">Autismo</label>
                        <label><input type="checkbox" name="diagnostico" value="Dislexia">Dislexia</label>
                        <label><input type="checkbox" name="diagnostico" value="Atraso de fala">Atraso de fala</label>
                        <label><input type="checkbox" name="diagnostico" value="Outros">Outros</label>
                    </div>
                    <textarea name="outros_diagnosticos" placeholder="Descreva outros diagnósticos se houver..."></textarea>
                </div>
            </section>

            <div class="container_botão">
                // Contêiner do botão de envio final.
                <button type="submit">Enviar</button>
                // O formulário será enviado quando o usuário clicar aqui.
            </div>

        </div>
    </form>
</main>


**PAGINA DE CONTATOS**..................................................................

<section class="img_formulario">
// Início da seção do formulário, provavelmente com imagem de fundo definida no CSS.

    <div class="container_cont_texto">
// Container para o título e o texto de apresentação.

        <h1>Fale Conosco!</h1>
// Título principal da seção.

        <p>Nossa equipe retornará em breve para esclarecer suas dúvidas e oferecer o melhor atendimento possível</p>
// Texto explicativo para o usuário.

    </div>
// Fim do container de texto informativo.


    <form class="formulario">
// Início do formulário. A classe é usada para estilização no CSS.

        <div class="linha">
// Agrupa elementos para ficarem na mesma linha (Nome + Email).

            <div class="input-box">
// Container de um campo do formulário.

                <input type="text" id="nome" maxlength="100" required>
// Campo onde o usuário digita o nome.
// maxlength limita a 100 caracteres.
// required torna o campo obrigatório.

                <label class="campo_input" for="nome">Nome</label>
// Label que identifica o campo, vinculado pelo atributo "for".

            </div>
// Fim de um campo (Nome).


            <div class="input-box">
// Segundo campo da mesma linha (Email).

                <input type="email" id="email" name="email" required>
// Campo para e-mail. O type="email" valida se o formato é válido.
// required obriga o preenchimento.

                <label class="campo_input" for="email">Email</label>
// Label do campo de e-mail.

            </div>
        </div>
// Fim da linha que contém nome e email.


        <div class="linha">
// Nova linha contendo o campo de assunto.

            <div class="input-box2">
// Versão mais larga da caixa do input, usada para elementos maiores.

                <label class="campo_input" for="assunto">Assunto:</label>
// Label indicando o que o usuário deve selecionar.

                <select id="assunto" name="assunto" required>
// Caixa de seleção (dropdown). O usuário deve escolher um assunto.

                    <option value="">Selecione o assunto</option>
// Opção inicial, vazia, obriga o usuário a escolher outra.

                    <option value="agendamento">Agendamento de consulta</option>
                    <option value="surporte">Suporte técnico</option>
                    <option value="duvidas">Dúvidas gerais</option>
                    <option value="remarcacao">Remarcação de horário</option>
                    <option value="reclamaçãos">Reclamaçãos</option>
                    <option value="elogio">Feedback</option>
                    <option value="outro">Outro</option>
// Cada <option> representa uma escolha que será enviada ao formulário.

                </select>
            </div>
        </div>
// Fim da linha contendo o campo "assunto".


        <div class="input-box2">
// Container para a caixa de mensagem.

            <label for="mensagem">Mensagem</label>
// Label indicando o conteúdo do campo abaixo.

            <textarea type="text" name="mensagem" required></textarea>
// Área de texto para digitar a mensagem. required → obrigatório.

        </div>


        <div class="container_botão">
// Container usado para centralizar o botão.

            <button type="submit">Enviar</button>
// Botão que envia o formulário.

        </div>

    </form>
// Fim do formulário.

</section>
// Fim de toda a seção de contato.


**PAGINA INICIAL**..................................................................

<section class="img_formulario">
    // Inicia uma seção que provavelmente tem uma imagem de fundo ou estilo visual do formulário

    <div class="container_cont_texto">
        // Div que contém o texto de apresentação do formulário

        <h1>Fale Conosco!</h1>
        // Título principal da seção de contato

        <p>Nossa equipe retornará em breve para esclarecer suas dúvidas e oferecer o melhor atendimento possível</p>
        // Texto explicativo para deixar o usuário tranquilo sobre o contato
    </div>

    <form class="formulario">
        // Início do formulário onde o usuário vai digitar os dados

        <div class="linha">
            // Essa div agrupa inputs lado a lado (linha horizontal)

            <div class="input-box">
                // Caixa de input organizada com CSS

                <input type="text" id="nome" maxlength="100" required>
                // Campo onde o usuário digita o nome
                // " required " significa que não pode enviar o formulário vazio

                <label class="campo_input" for="nome">Nome</label>
                // Label que aparece como texto dentro/ao lado do input
            </div>
                
            <div class="input-box">
                // Segunda caixa de input na mesma linha

                <input type="email" id="email" name="email" required>
                // Campo para inserir email, com validação automática por ser type="email"

                <label class="campo_input" for="email">Email</label>
                // Label do campo de email
            </div>
        </div>
            
        <div class="linha">
            // Nova linha contendo outro tipo de campo (select)

            <div class="input-box2">
                // Caixa especial mais larga para caber seleção

                <label class="campo_input" for="assunto">Assunto:</label>
                // Texto identificando o que o usuário vai escolher

                <select id="assunto" name="assunto" required>
                    // Menu suspenso onde o usuário escolhe o motivo do contato

                    <option value="">Selecione o assunto</option>
                    // Opção vazia para obrigar o usuário a escolher algo

                    <option value="agendamento">Agendamento de consulta</option>
                    // Opção 1

                    <option value="surporte">Suporte técnico</option>
                    // Opção 2

                    <option value="duvidas">Dúvidas gerais</option>
                    // Opção 3

                    <option value="remarcacao">Remarcação de horário</option>
                    // Opção 4

                    <option value="reclamaçãos">Reclamaçãos</option>
                    // Opção 5 (com erro de ortografia, se quiser eu corrijo)

                    <option value="elogio">Feedback</option>
                    // Opção 6

                    <option value="outro">Outro</option>
                    // Opção 7
                </select>
            </div>
        </div>
            
        <div class="input-box2">
            // Caixa maior para campo de texto longo

            <label for="mensagem">Mensagem</label>
            // Nome do campo

            <textarea type="text" name="mensagem" required></textarea> 
            // Campo de texto onde o usuário digita a mensagem
            // "required" impede envio vazio
        </div>            
            
        <div class="container_botão">
            // Div responsável apenas por alinhar o botão

            <button type="submit">Enviar</button>
            // Botão que envia o formulário
        </div>

    </form>
</section>


## IMG ##

// Imagens diversas do site, como cards, logo.

## JS ##

**Celebro1**..................................................................

document.addEventListener("DOMContentLoaded", () => {
// Espera todo o HTML carregar antes de rodar o JavaScript
// Assim nada quebra por tentar acessar elementos que ainda não existem


  const _links = document.querySelectorAll(".ativo");
  // Seleciona todos os links que possuem a classe "ativo" (itens do menu)

  _links.forEach(link => {
    // Para cada link encontrado...

    if (link.href === window.location.href) {
      // Verifica se o link aponta para a mesma página que está aberta
      link.style.color = '#38e0dc';
      // Se sim, muda a cor desse link → destacando a página atual no menu
    }
  });


  const botao = document.querySelector("#botao");
  // Seleciona o botão que abre/fecha o menu (geralmente menu hamburguer no celular)

  const menu = document.getElementById("menu");
  // Seleciona o menu que será aberto/fechado


  botao.addEventListener("click", (e) => {
    // Quando o botão for clicado...

    e.stopPropagation();
    // Impede que o clique afete outros elementos fora do botão (evita fechar o menu sem querer)

    if (!menu.classList.contains("mostrar")) {
      // Se o menu *não* estiver visível...
      
      menu.classList.add("mostrar");
      // Adiciona a classe que mostra o menu (provavelmente tem animação no CSS)

      menu.classList.remove("saindo");
      // Remove classe de animação de saída, caso estivesse presente

    } else {
      // Se o menu já estiver aberto...

      menu.classList.add("saindo");
      // Ativa animação de fechamento

      menu.classList.remove("mostrar");
      // Remove a classe de menu aberto

      setTimeout(() => {
        menu.classList.remove("saindo");
        // Após 300ms (tempo da animação), remove a classe de saída
      }, 300);
    }
  });


  document.addEventListener("click", () => {
  // Se clicar em qualquer lugar fora do menu...

    if (menu.classList.contains("mostrar")) {
      // Se o menu estiver aberto...

      menu.classList.add("saindo");
      menu.classList.remove("mostrar");

      setTimeout(() => {
        menu.classList.remove("saindo");
      }, 300);
    }
  });


  const _carrossel = document.querySelector('.carrossel-areas');
  // Seleciona o contêiner do carrossel

  const _cards = document.querySelectorAll('.carrossel-areas .card');
  // Seleciona todos os cards dentro do carrossel

  const _anter = document.querySelector('.anter');
  // Botão de voltar

  const _prox = document.querySelector('.prox');
  // Botão de avançar

  let index = 0;
  // Controla qual card está visível


  function atualizarCarrossel() {
    // Função que move o carrossel

    const cardWidth = _cards[0].offsetWidth;
    // Pega a largura de um card

    const gap = 20;
    // Espaço entre os cards

    const deslocamento = index * (cardWidth + gap);
    // Calcula quanto deslocar o carrossel com base no card atual

    _carrossel.style.transform = `translateX(-${deslocamento}px)`;
    // Move o carrossel horizontalmente
  }


  if (_prox && _anter && _carrossel) {
    // Se os elementos existirem, ativa os botões

    _prox.addEventListener('click', function() {
      index = (index + 1) % _cards.length;
      // Vai para o próximo card (e volta para o primeiro ao chegar no final)
      atualizarCarrossel();
    });

    _anter.addEventListener('click', function() {
      index = (index - 1 + _cards.length) % _cards.length;
      // Vai para o card anterior (e vai para o último se estiver no primeiro)
      atualizarCarrossel();
    });
  }


  const palavras = ["cuidar.", "comunicar.", "prevenir."];
  // Array com palavras que vão ficar trocando na animação

  let i = 0;
  // Índice da palavra atual

  const span = document.querySelector(".palavra");
  // Seleciona o elemento onde as palavras vão aparecer

  setInterval(() => {
    // Executa repetidamente em intervalo de tempo (loop automático)

    span.classList.add("oculto");
    // Ativa classe de desaparecimento para fazer fade-out

    setTimeout(() => {
      i = (i + 1) % palavras.length;
      // Troca para a próxima palavra (volta para a primeira quando chega na última)

      span.textContent = palavras[i];
      // Troca o texto exibido

      span.classList.remove("oculto");
      // Remove o efeito de sumir (faz fade-in)
    }, 500);

  }, 2000);
  // Troca de palavra a cada 2 segundos
});


**Celebro2**..................................................................

document.addEventListener('DOMContentLoaded', () => {
    // Esse evento garante que o JavaScript só será executado
    // depois que todo o HTML estiver carregado

    document.getElementById('nome').textContent = localStorage.getItem('nome');
    // Pega o valor salvo no localStorage na chave "nome" e coloca dentro do elemento com id="nome"

    document.getElementById('email').textContent = localStorage.getItem('email');
    // Faz a mesma coisa para email

    document.getElementById('cpf').textContent = localStorage.getItem('cpf');
    // Para cpf

    document.getElementById('telefone').textContent = localStorage.getItem('telefone');
    // Para telefone

    document.getElementById('data_nasc').textContent = localStorage.getItem('data_nasc');
    // Para data de nascimento

    document.getElementById('servicos').textContent = localStorage.getItem('servicos');
    // Para o serviço selecionado

    document.getElementById('idade').textContent = localStorage.getItem('idade');
    // Para idade

    document.getElementById('genero').textContent = localStorage.getItem('genero'); 
    // Para gênero


    const idade = localStorage.getItem("idade");
    // Guarda idade em uma variável

    const blocoResponsavel = document.getElementById("dados_responsavel");
    // Seleciona o bloco onde aparece os dados do responsável

    if ( idade < 18) {
        blocoResponsavel.style.display = "block";
        // Se a pessoa for menor de idade, mostrar campo responsável
    } else {
        blocoResponsavel.style.display = "none";
        // Se for maior de idade, esconder o campo do responsável
    }


    const input = document.getElementById('nome_responsavel');
    // Seleciona campo de nome do responsável

    input.addEventListener('input', () => {
        input.value = input.value.replace(/[^A-Za-zÀ-ú\s]/g, '');
        // Quando digitar, só permite letras e espaço, remove números e símbolos
    });


    const cpf = document.getElementById('cpf_resposavel');
    // Seleciona o campo CPF do responsável

    cpf.addEventListener('input', function(e) {
        let value = e.target.value;
        value = value.replace(/\D/g, '');
        // Remove tudo que não for número

        value = value.slice(0, 11);
        // Limita no máximo 11 números

        // Formatação automática do CPF conforme o usuário digita
        if (value.length === 11) {
            value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        } else if(value.length > 8) {
            value = value.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3');
        } else if(value.length > 5) {
            value = value.replace(/(\d{3})(\d{3})/, '$1.$2');
        } else if(value.length > 2) {
            value = value.replace(/(\d{3})/, '$1');
        }

        e.target.value = value;
        // Atualiza o campo com a formatação aplicada
    });


    const telefone = document.getElementById('tel_responsavel');
    // Seleciona campo telefone

    telefone.addEventListener('input', function(e) {
        let value = e.target.value;
        value = value.replace(/\D/g, '');
        // Remove tudo que não for número

        value = value.slice(0, 11);
        // Limite de 11 dígitos (modelo de celular)

        // Formatação automática: (xx) xxxxx-xxxx
        if (value.length === 11) {
            value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
        } else if (value.length > 2) {
            value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
        }

        e.target.value = value;
    });


    const palavras = ["cuidar.", "comunicar.", "prevenir."];
    // Lista de palavras que vão aparecer animando

    let i = 0;
    // Índice da palavra atual

    const span = document.querySelector(".palavra");
    // Seleciona o elemento onde as palavras serão trocadas

    setInterval(() => {
        span.classList.add("oculto");
        // Aplica efeito de sumir

        setTimeout(() => {
            i = (i + 1) % palavras.length;
            // Passa para a próxima palavra, e volta ao início quando chegar no fim

            span.textContent = palavras[i];
            // Troca o texto exibido

            span.classList.remove("oculto");
            // Remove efeito de sumir (faz aparecer de novo)
        }, 500);

    }, 2000);
    // Troca de palavra a cada 2 segundos
});


**Celebro3**..................................................................

// Espera todo o HTML carregar antes de rodar o script
document.addEventListener("DOMContentLoaded", () => {

  // Array com palavras que vão ficar trocando na animação
  const palavras = ["cuidar.", "comunicar.", "prevenir."];
  let i = 0; // Índice para saber qual palavra mostrar

  // Seleciona o span onde as palavras vão aparecer
  const span = document.querySelector(".palavra");
  
  // Função repetida que troca a palavra a cada 2s
  setInterval(() => {
    span.classList.add("oculto"); // Aplica classe para esconder com animação

    setTimeout(() => {
      i = (i + 1) % palavras.length; // Avança no array e volta ao início quando chega no final
      span.textContent = palavras[i]; // Troca o texto no elemento
      span.classList.remove("oculto"); // Mostra novamente a palavra
    }, 500); // Tempo da animação
  }, 2000); // Intervalo entre trocas

  // Seleciona todos os links com a classe "ativo"
  const _links = document.querySelectorAll(".ativo");

  // Deixa o link referente à página atual destacado
  _links.forEach(link => {
    if (link.href === window.location.href) { // Se o link é da página atual
      link.style.color = '#38e0dc'; // Muda cor
    }
  });

  // ---------- CARROSSEL ----------
  const _carrossel = document.querySelector('.carrossel_container');
  const _imagens = document.querySelectorAll('.carrossel_container img');
  const _anter = document.querySelector('.anter'); // Botão anterior
  const _prox = document.querySelector('.prox');   // Botão próximo

  let index = 0; // Imagem atual no carrossel

  // Atualiza o movimento do carrossel baseando na imagem atual
  function atualizarCarrossel() {
    _carrossel.style.transform = `translateX(${-index * 100}%)`;
  }

  // Verifica se os elementos existem para evitar erro
  if (_prox && _anter && _carrossel) {

    // Quando clicar no botão "próximo"
    _prox.addEventListener('click', function() {
      index = (index + 1) % _imagens.length; // Avança e volta ao início
      atualizarCarrossel(); // Atualiza a posição
    });

    // Quando clicar no botão "anterior"
    _anter.addEventListener('click', function() {
      index = (index - 1 + _imagens.length) % _imagens.length; // Volta imagem
      atualizarCarrossel();
    });
  }

  // ---------- MENU MOBILE ----------
  const botao = document.querySelector("#botao");
  const menu = document.getElementById("menu");

  // Mostra/esconde o menu ao clicar no botão
  botao.addEventListener("click", function() {
    menu.classList.toggle("mostrar");
  });

  // ---------- VALIDAÇÃO DE NOME (sem números) ----------
  const input = document.getElementById('nome');

  input.addEventListener('input', () => {
    input.value = input.value.replace(/[^A-Za-zÀ-ú\s]/g, '');
  });

  // ---------- MÁSCARA DE CPF ----------
  const cpf = document.getElementById('cpf');

  cpf.addEventListener('input', function(e) {
    let value = e.target.value;
    value = value.replace(/\D/g, ''); // Remove tudo que não for número
    value = value.slice(0, 11); // Limita a 11 dígitos

    // Formata automaticamente enquanto digita
    if (value.length === 11) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if(value.length > 8) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3');
    } else if(value.length > 5) {
      value = value.replace(/(\d{3})(\d{3})/, '$1.$2');
    }

    e.target.value = value;
  });

  // ---------- MÁSCARA DE TELEFONE ----------
  const telefone = document.getElementById('telefone');
  
  telefone.addEventListener('input', function(e) {
    let value = e.target.value;
    value = value.replace(/\D/g, ''); // Só números
    value = value.slice(0, 11); // Máx 11 dígitos

    // Formata conforme digita
    if (value.length === 11) {
      value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    }

    e.target.value = value;
  });

  // ---------- CÁLCULO DE IDADE ----------
  const nascimento = document.getElementById('data_nasc');
  let idade = 0; 

  nascimento.addEventListener('input', () => {
    const valor = nascimento.value; 

    if (valor) {
      const hoje = new Date();
      const dataNasc = new Date(valor);

      idade = hoje.getFullYear() - dataNasc.getFullYear();

      // Ajuste caso ainda não fez aniversário no ano
      const mesHoje = hoje.getMonth();
      const diaHoje = hoje.getDate();
      const mesNasc = dataNasc.getMonth();
      const diaNasc = dataNasc.getDate();

      if (mesHoje < mesNasc || (mesHoje === mesNasc && diaHoje < diaNasc)) {
        idade--;
      }
    }

  });

  // ---------- SALVANDO OS DADOS NO LOCALSTORAGE ----------
  document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede envio padrão

    // Salva os dados preenchidos no navegador
    localStorage.setItem('nome', document.getElementById('nome').value);
    localStorage.setItem('email', document.getElementById('email').value);
    localStorage.setItem('telefone', document.getElementById('telefone').value);
    localStorage.setItem('data_nasc', nascimento.value);
    localStorage.setItem('cpf', document.getElementById('cpf').value);
    localStorage.setItem('genero', document.getElementById('genero').value);
    localStorage.setItem('servicos', document.getElementById('servicos').value);
    localStorage.setItem('idade', String(idade)); // Salva idade calculada
    
    // Redireciona para a página final
    window.location.href = 'P_confirmacao.html';
  });

});


**Celebro4**..................................................................

// Espera todo o conteúdo da página carregar antes de executar o código
document.addEventListener("DOMContentLoaded", () => {

  // ------------------ DESTACAR LINK DA PÁGINA ATUAL ------------------
  // Seleciona todos os links que possuem a classe "ativo"
  const _links = document.querySelectorAll(".ativo");

  // Para cada link encontrado:
  _links.forEach(link => {
    // Compara o link com a URL atual da página
    if (link.href === window.location.href) {
      // Se for o link da página atual, muda a cor dele
      link.style.color = '#38e0dc';
    }
  });

  // ------------------ CARROSSEL DE IMAGENS ------------------
  const _carrossel = document.querySelector('.carrossel_container'); // Área que desliza
  const _imagens = document.querySelectorAll('.carrossel_container img'); // Imagens do carrossel
  const _anter = document.querySelector('.anter'); // Botão de voltar
  const _prox = document.querySelector('.prox');   // Botão de avançar

  let index = 0; // Guarda qual imagem está sendo exibida no momento

  // Função que desloca o carrossel com base no índice da imagem atual
  function atualizarCarrossel() {
    _carrossel.style.transform = `translateX(${-index * 100}%)`;
  }

  // Só ativa o carrossel se todos os elementos existirem (para evitar erro)
  if (_prox && _anter && _carrossel) {
    
    // Quando clicar no botão "próximo"
    _prox.addEventListener('click', function() {
      index = (index + 1) % _imagens.length; // Avança e volta ao início quando chega no final
      atualizarCarrossel();
    });

    // Quando clicar no botão "anterior"
    _anter.addEventListener('click', function() {
      index = (index - 1 + _imagens.length) % _imagens.length; // Volta e não quebra caso seja a primeira
      atualizarCarrossel();
    });
  }

  // ------------------ MENU RESPONSIVO (ABRIR / FECHAR) ------------------
  const botao = document.querySelector("#botao"); // Botão do menu (mobile)
  const menu = document.getElementById("menu"); // Menu

  // Quando clicar no botão:
  botao.addEventListener("click", function() {
    menu.classList.toggle("mostrar"); 
    // .toggle adiciona a classe se não tiver / remove se já tiver
  });

  // ------------------ TEXTO ANIMADO TROCA AUTOMATICAMENTE ------------------
  const palavras = ["cuidar.", "comunicar.", "prevenir."]; // Palavras que serão alternadas
  let i = 0; // Índice da palavra atual
  const span = document.querySelector(".palavra"); // Elemento onde as palavras aparecem

  // Troca de palavra repetidamente
  setInterval(() => {
    span.classList.add("oculto"); // Aplica animação para desaparecer

    setTimeout(() => {
      i = (i + 1) % palavras.length; // Pula para a próxima palavra e reinicia quando acabar
      span.textContent = palavras[i]; // Muda o texto na tela
      span.classList.remove("oculto"); // Mostra novamente com animação
    }, 500); // Tempo para esconder antes de trocar

  }, 2000); // Intervalo de troca (2 segundos)

});


