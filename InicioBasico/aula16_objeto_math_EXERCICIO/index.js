/* Math é um objeto, e floor, ceil, round é um metodo, que fica dentro desse objeto Math */
let num1 = 9.5478;

// arredondando para baixo
let num2 = Math.floor(num1)
console.log(num2)

// arredondando para cima
let num3 = Math.ceil(num1);
console.log(num3)

// arredondando para o mais proximo
let num4 = Math.round(num1);
console.log(num4)

// Pegar o maior número de uma sequencia de numeros
console.log(Math.max(1,2,3,4,5,-10,-55, 1200,11, 54));

// Pegar o menor número de uma sequencia de numeros
console.log(Math.min(1,2,3,4,5,-10,-55, 1200,11, 54));

// gerar numero aleatorio entre 0 e 1, o 1 inteiro nunca vai ser incluido
console.log(Math.random());

// gerar numero aleatorio entre 10 e 5 e deixando ele arredondado
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);

// 2 elevado a 10
console.log(Math.pow(2, 10));
console.log(2 ** 10);

// dividir um numero por zero, dá Infinit(True) (outras linguagens poderia dar erro)
console.log(100 / 0);

// pegando a raiz quadrada
let numero = 11;
console.log(numero ** 0.5);
//console.log(numero ** (1/2));









