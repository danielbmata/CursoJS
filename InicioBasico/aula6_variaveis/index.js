let nome = 'João';

console.log(nome, 'nasceu em 1984');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve um filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo');

// Posso declarar uma var e inicia-la posteriormente

let nome2;  // Declarei a var
nome2 = 'Qualquer valor'  // Iniciei a var
console.log(nome2)

// Mudando o valor da var

nome2 = 123 
console.log(nome2)

/*
  Não posso re-declarar uma var usando let, geraria erros.
let nome = 'Daniel'
*/

/*
  Não podemos criar variaveis com palavras reservadas
let let 
let console
let if
Etc...
*/

/*
  Não podemos começar o nome de uma var com um numero
  e não pode conter espaços ou traços
let 01nome = 'Daniel'
*/

// Boa pratica é utilizar camelCase
let nomeCompletoDoCliente;