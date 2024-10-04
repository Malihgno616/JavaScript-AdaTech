// Array.prototype.every(): verificar se todos os elementos de um array segue uma determinada condição retornada pela função

const numeros = [12, 34, 53, 67, 8, 9, 190];

const todosPositivos = numeros.every((elemento) => elemento > 0);

console.log(todosPositivos);

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

const todosMaioresDeIdade = pessoas.every((pessoa) => pessoa.idade > 18);

console.log(todosMaioresDeIdade);

// Array.prototype.some(): verificar se algum elemento do array torna verdadeira uma determinada condição retornada pela função

console.clear();

const numeros2 = [-1, 3, 7, -3, 5];

const retorno = numeros2.some((numero) => numero > 0);

console.log(retorno);

