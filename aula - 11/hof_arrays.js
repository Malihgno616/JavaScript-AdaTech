// * FUNÇÕES DE ALTA ORDEM DE ARRAYS

// 1. Array.prototype.forEach()

const numeros = [40, 34, 44, 123, 32, 16, 10];

numeros.forEach((elemento, index, arrayCompleto) => {
  console.log(index, elemento, arrayCompleto);
});

console.clear();
// forEach = Por cada elemento executanto essa função para cada elemento

// 2. Array.prototype.find(): Útil para encontrar um elemento dentro do array

const encontrado = numeros.find((numero) => {
  return numero < 20 && numero > 10;
});

console.log(encontrado);

// Array de objetos
const pessoas = [
  {
    nome: "João",
    idade: 20,
    altura: 1.77,
  },
  {
    nome: "Maria",
    idade: 25,
    altura: 1.65,
  },
  {
    nome: "Pedro",
    idade: 30,
    altura: 1.83,
  },
];

const pessoaEncontrada = pessoas.find(
  (pessoa) => pessoa.idade > 20 && pessoa.altura > 1.7
);

console.clear();
console.log(pessoaEncontrada);

// 3. Array.prototype.findIndex(): Parecido com o find(), porém retorna o índice do elemento encontrado

const indiceDaPessoaEncontrada = pessoas.findIndex(
  (pessoa) => pessoa.idade > 20 && pessoa.altura > 1.7
);

console.clear();
console.log(indiceDaPessoaEncontrada);
