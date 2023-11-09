/*
Eu devo imprimir isso:

Daniel Mata tem 26 anos, pesa 72 kg
tem 1.8 de altura e seu IMC é de 22.22
Daniel Mata nasceu em 1997

criando as variaveis
*/ 


const nome = 'Daniel'
const sobrenome = 'Mata'
const idade = 25; 
const peso = 72;
const altura = 1.80;
let imc = peso / (altura * altura); 
let anoNascimento = 2023 - 26;


console.log(nome, sobrenome, 'tem', idade, 'anos, e pesa', peso,'kg, tem',
 altura, 'de altura e seu IMC é de', imc);

console.log(nome, sobrenome, 'nasceu em', anoNascimento);

