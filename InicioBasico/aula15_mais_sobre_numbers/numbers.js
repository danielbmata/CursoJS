let num1 = 1; // number
let num2 = 2.5; //number
let num3 = 1500;
let num4 = 10.445437465178544;

// convertendo temporariamente para strig, para concatenar 
console.log(num1.toString() + num2);
// mas o num1 continua sendo number
console.log(typeof num1);
// aqui eu estaria convertendo ele definitivamente para string
num1 = num1.toString();
// vendo a representação binaria do numero
console.log(num3.toString(2))
// arredondand um numero com muitas casas decimais
console.log(num4.toFixed(2))
// checando se uma var é um int ou não
console.log(Number.isInteger(num1)) // aqui está falso pois eu converti ele em str acima
// checando se é um Not a Number (NaN)
let temp = num3 * 'olá';
console.log(Number.isNaN(temp));