// soliciantando um numero no inicio:
const numero = Number(prompt("Digite um número:"));
// pegando os elementos por id que defini no HTML:
const numeroTitulo = document.getElementById('numero-titulo');
const inteiro = document.getElementById('inteiro');
const nan = document.getElementById('nan');
const baixo = document.getElementById('baixo');
const cima = document.getElementById('cima');
const decimais = document.getElementById('decimais');




// numero maior do titulo com o numero principal:
numeroTitulo.innerHTML = numero;
// raiz quadrada do numero que foi inserido pelo user:
raiz.innerHTML = ` ${numero ** 0.5}`;
// verificando se é um numero inteiro:
inteiro.innerHTML = `${numero} É inteiro? ${Number.isInteger(numero)}`;
// verificando se é um NaN:
nan.innerHTML = `${numero == NaN}`;
// arredondando para baixo:
baixo.innerHTML = `${Math.floor(numero)}`;
// arredondando para cima:
cima.innerHTML = `${Math.ceil(numero)}`;
// exibindo o numero com duas casas decimais:
decimais.innerHTML = `${numero.toFixed(2)}`;