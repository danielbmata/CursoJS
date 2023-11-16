// lista / uma coleção de coisas dentro
// tem indices   0        1       2    
let alunos = ['Maria', 'Luiz', 'João'];
// acessando o 'João' que está no indice dois
console.log(alunos[2]);
// editando o valor do indice 0
alunos[0] = 'Eduardo';
console.log(alunos);
//adicionando mais valores no final do array
alunos.push('Luiza');
alunos.push('José');
alunos.push('Fabio');
console.log(alunos);
//adicionando mais valores no inicio do array
alunos.unshift('Cardoso');
alunos.unshift('Silvio');
console.log(alunos);
// removendo valores do array e jogando em uma variavel
const removidos = alunos.pop(); //remove o ultimo
alunos.shift(); //remove o primero
console.log(removidos);
console.log(alunos);
// apagando valor de um indice e deixando o indice vazio
delete alunos[1];
console.log(alunos);
// fatiando a string e pegando do elemento 2 ao 5
console.log(alunos.slice(2, 5))
// array retorna object
console.log(typeof alunos);
// para ter certeza que é um array/ true ou false
console.log(alunos instanceof Array);

