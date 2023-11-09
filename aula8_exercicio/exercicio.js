/*
Eu devo imprimir isso:

Daniel Mata tem 26 anos, pesa 72 kg
tem 1.8 de altura e seu IMC é de 22.22
Daniel Mata nasceu em 1997

criando as variaveis
*/ 


const nome = 'Daniel'
const sobrenome = 'Mata'
const idade = 26; 
const peso = 72;
const altura = 1.80;
let indiceMassaCorporal = peso / (altura * altura);
let anoNascimento = 2023 - idade;


console.log(nome, sobrenome, 'tem', idade, 'anos, e pesa', peso,'kg, tem', altura, 'de altura e seu IMC é de', indiceMassaCorporal);
console.log(nome, sobrenome, 'nasceu em', anoNascimento);

// utilizando template strings | maneira mais moderna
console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} kg, tem ${altura} de altura e seu IMC é de ${indiceMassaCorporal}`);
