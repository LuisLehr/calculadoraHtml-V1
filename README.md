# 🧮 Calculadora Web - pt-BR

Projeto de uma calculadora web simples, desenvolvida com **HTML**, **CSS** e **JavaScript**.

A aplicação permite realizar operações matemáticas básicas diretamente pelo navegador, utilizando uma interface visual organizada e responsiva. O projeto foi desenvolvido com foco na prática de manipulação do DOM, eventos de clique, controle de estado da aplicação e construção de layouts com CSS Grid.

## 📌 Sobre o Projeto

A calculadora possui uma interface semelhante a calculadoras tradicionais, com visor para exibição dos valores digitados e botões para números, operadores e ações especiais.

O funcionamento é feito em JavaScript, armazenando o estado atual da calculadora em um objeto. A partir das interações do usuário, o sistema atualiza o visor, controla os operandos e executa os cálculos conforme o operador selecionado.

## 🚀 Funcionalidades

* Inserção de números pelo teclado visual.
* Operações matemáticas básicas:

  * Adição
  * Subtração
  * Multiplicação
  * Divisão
* Cálculo com porcentagem.
* Inserção de valores decimais.
* Botão `AC` para limpar a calculadora.
* Botão `DEL` para apagar o último dígito.
* Botão `=` para exibir o resultado.
* Atualização dinâmica do visor.
* Interface responsiva para telas menores.

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* CSS Grid
* Manipulação do DOM

## 📁 Estrutura do Projeto

```bash
calculadora/
├── index.html
├── style.css
└── script.js
```

## 📦 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
cd NOME_DO_REPOSITORIO
```

### 2. Abra o projeto

Abra o arquivo `index.html` diretamente no navegador.

Também é possível utilizar uma extensão como **Live Server** no Visual Studio Code para executar o projeto localmente.

## 🧠 Como Funciona

O projeto utiliza um objeto chamado `calculadora` para armazenar o estado atual da aplicação, incluindo:

* Valor exibido no visor.
* Primeiro operando.
* Operador selecionado.
* Controle para saber se a calculadora está aguardando o segundo operando.

As funções JavaScript são responsáveis por inserir números, adicionar casas decimais, lidar com operadores, realizar os cálculos, limpar os dados e atualizar o display da calculadora.

## 🎨 Interface

A interface foi estilizada com CSS, utilizando:

* Layout centralizado na tela.
* Botões organizados com CSS Grid.
* Cores diferentes para operadores, botão de igualdade, limpar e deletar.
* Efeito visual ao clicar nos botões.
* Responsividade para telas pequenas.

## 📚 Objetivo do Projeto

O objetivo deste projeto é praticar conceitos fundamentais de desenvolvimento web, como estruturação de páginas com HTML, estilização com CSS e criação de interatividade com JavaScript.

Além disso, o projeto ajuda a reforçar conceitos como eventos, funções, objetos, condicionais e manipulação de elementos da página.

## ✒ Desenvolvido por

**Luis Henrique Lehr**
