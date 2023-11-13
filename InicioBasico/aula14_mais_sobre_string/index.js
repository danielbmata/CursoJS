// indices       01234567
let umaString = 'O rato roeu a roupa do rei de roma';

console.log(umaString[4]);
console.log(umaString.charAt(5));
console.log(umaString.indexOf('roma'));
console.log(umaString.lastIndexOf('o', 3));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/r/));
console.log(umaString.replace('rato', 'pato'));
console.log(umaString.length);
console.log(umaString.slice(3, 8)); // pegando so do indice  3 até o 8
console.log(umaString.split(' ', 3)); 
console.log(umaString.toUpperCase()); 
console.log(umaString.toLowerCase()); 

// documentação caso eu precise consultar algo
// https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods
