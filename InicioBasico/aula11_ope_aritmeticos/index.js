/*
    Aritméticos:
    +  Adição e Concatenação
    - / *   Subtração, Divisão e Multiplicação
    **  Potenciação
    %  Resto da divisão
*/

// aqui é uma adição
const num1 = 10;
const num2 = 3;
console.log(num1 + num2);

// neste caso é uma concatenação, pois o 5 é uma string
const num11 = '5';
const num22 = 10;
console.log(num11 + num22);

// Elevando o numero **
console.log(num1 ** num2);

// Resto da divisão %
console.log(num1 % num2);

/* Ordem de precedencia
    1° ()
    2° **
    3° * / %
    4° + -
*/

// Operador de incremento
let contador = 1;
contador++;  // 2
contador++;  // 3
contador++;  // 4
contador++;  // 5
console.log(contador);
++contador;
console.log(contador);

// Operador de decremento
let contador2 = 10;
--contador2;
console.log(contador2);  // 9
--contador2;
console.log(contador2);  // 8
contador2--;
console.log(contador2);  // 7

// Quando eu precisar fazer o incremento de mais de um valor
const step = 2;
let contador3 = 0;

contador3 = contador3 + step;
console.log(contador3)  // 2

contador3 = contador3 + step;
console.log(contador3) // 4

contador3 = contador3 + step;
console.log(contador3) // 6

// Forma mais simples
let contador4 = 0;
contador4 += 2;
contador4 += 2;
contador4 += 2;
console.log(contador4)
// posso usar com outros operadores **=, -=, *=

// Convertendo uma string em int ParseInt(), uso o ParseFloat() para numeros de ponto flutuante
// tambem existe o Number()
const numero1 = 10;
const numero2 = parseInt('5');
console.log(numero1 + numero2)
console.log(typeof numero2)
