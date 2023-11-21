function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Daniel');
console.log(variavel)


//----------------------

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma(10, 3));
console.log(soma(11, 28));

// --------------
// valor padrão
function soma2(x = 1, y = 2) {
    const resultado = x + y;
    return resultado;
}

console.log(soma2())

// Jogando uma função dentro de uma variavel / função anônima 
let raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));

// arrow function
let raiz2 = n => n ** 0.5;
console.log(raiz2(16));