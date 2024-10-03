// Definição da função
function saudacao(nomeDoEstudante, curso = "Front-end em React") {
  // template string || template literals ``
  return `Olá, ${nomeDoEstudante}! Seja bem-vindo(a) ao curso de ${curso}`;
}

// Chamada da função
const mensagemDaSaudacao = saudacao("Ackin");

console.log(mensagemDaSaudacao);

//* Exemplo 2

console.clear();

function somar(numero1, numero2) {
  return numero1 + numero2;
}

const resultado = somar(2, 3);

console.log(resultado); // 5

console.clear();
//-----------------
// Funções anônimas

const dobroDoNumero = function (numero) {
  return numero * 2;
};

const dobro = dobroDoNumero(2);
console.log(dobro);

//-----------------
// Arrow function: Função Seta

const subtrair = (numero1, numero2) => {
  return numero1 - numero2;
};

const multiplicar = (numero1, numero2) => numero1 * numero2;

const triploDoNumero = (numero) => numero * 3;

  