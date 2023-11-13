// A tem que ter o valor de B
// B tem que ter o valor de C
// C tem que ter o valor de A

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A 

/*
const varAtemporario = varA;
varA = varB;
varB = varC;
varC = varAtemporario;
*/

// forma mais simples e moderna:
[varA, varB, varC] = [varB, varC, varA]


console.log(varA, varB, varC);