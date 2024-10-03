const prompt = require("readline-sync");

// expressão 1: inicialização da variável de controle
// expressão 2: condição que define quando irá ocorrer a parada do for
// expressão 3: incremento da variável de controle
// for (expressão 1; expressão 2; expressão 3) {
// bloco de código
// }

// for (let i = 0; i < 5; i += 2) {
//   console.log(i);
// }

/// limpando o console
// console.clear();

// for (;;) {}

// while (true) {

// }

// Exemplo

// let maiorNumero = 0;
// let numeroInformado;

// for (let i = 1; i <= 5; i++) {
//   numeroInformado = Number(prompt.question("Informe um número positivo: "));

//   if (numeroInformado > maiorNumero) {
//     maiorNumero = numeroInformado;
//   }
// }

// console.log("Maior numero: ", maiorNumero);

// * Exemplo: percorre strings com o for

const nome = "Ackin";

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);

  // if (i === 2) {
  //   break;
  // }
}

console.clear();

// ARRAYS

const nota1 = 10;
const nota2 = 8;
const nota3 = 9;

const notasDoAluno = [10, 8, 5];
const pessoa = ["Ackin", 27, 1.77, true];

console.log(notasDoAluno);
console.log(pessoa);

pessoa[3] = false;
console.log(pessoa);

console.clear();
console.log(pessoa.length);
console.log(notasDoAluno.length);

console.clear();

// Fatiamento de arrays
const numeros = [40, 34, 50, 123, 23, 10];

console.log(numeros.slice(0, 2));
console.log(numeros.slice(2, 2));

console.clear();

// Adicionando elementos no final do array
numeros.push(0);
console.log(numeros);
console.clear();

// Adicionar elemento no início do array
numeros.unshift(-1);
console.log(numeros);

// pop: remover o elemento que está no final do array
console.clear();
numeros.pop(); // Remove o elemento 0 (do final)
numeros.pop();
console.log(numeros);

// shift: remover o primeiro elemento do array
console.clear();
numeros.shift();
console.log(numeros);

// Será que o elemento 20 existe no array numeros?
console.clear();
console.log(numeros.includes(20));
console.log(numeros.includes(10));

if (numeros.includes(10)) {
  console.log("Opa! Existe um número 20 dentro do array numeros!");
} else {
  console.log("Não existe o numero 20 no array numeros.");
}

const existeONumero20 = numeros.includes(20);

// * indexOf
const indiceDoElemento10 = numeros.indexOf(10);

console.log(indiceDoElemento10);

// * lastIndexOf
// [10, 3, 6, 10, 4]
const indiceDoElemento40 = numeros.lastIndexOf(40);

console.log(indiceDoElemento40);
console.clear();

// * Percorrendo arrays com o for

const arr = [40, 36, 90, 76, 32, 7];

for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}
console.clear();

// * for-of

console.log(typeof arr);

for (const elemento of arr) {
  console.log(elemento);
}

console.clear();

// * for-in

for (const indice in arr) {
  console.log(indice, typeof indice);
  console.log(arr[indice]);
}

