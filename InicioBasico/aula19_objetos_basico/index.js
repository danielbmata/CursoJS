// [] isso é array e {} isso é objeto
const pessoa01 = {
    nome: 'Daniel',
    sobrenome: 'Mata',
    idade: '26',
};

console.log(pessoa01.nome);
console.log(pessoa01.sobrenome);
console.log(pessoa01.idade);

// --------------------

const pessoa02 = {
    nome: 'Maria',
    sobrenome: 'Santos',
    idade: '21',
};

console.log(pessoa02.nome);
console.log(pessoa02.sobrenome);
console.log(pessoa02.idade);

// função que cria objetos:

//                     |   Parâmetros  |
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    };
}
//                            |    Argumêntos    |
const pessoa03 = criaPessoa('Bruno', 'Oliveira', 25);
const pessoa04 = criaPessoa('Silvino', 'Paraguai', 30); 