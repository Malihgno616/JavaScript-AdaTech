// FILTER

// map: sempre retorna um array do mesmo tamanho do array original
// filter: sempre retorna um array do tamanho igual ou inferior ao tamanho do array original

const valores = [32, 34, 45, 432, 6, 5, 7, 66, 54, 4, 6, 234, 31];

const pares = valores.filter((valor) => valor % 2 === 0);

console.log(pares);

// * Exemplo - 1

console.clear();

const alunos = [
  { nome: "João", media: 75 },
  { nome: "Maria", media: 85 },
  { nome: "Pedro", media: 95 },
  { nome: "Ana", media: 65 },
];

const alunosComMediaSuperiorA85 = alunos.filter((aluno) => aluno.media > 85);

console.log(alunosComMediaSuperiorA85);

// * Exemplo 2
console.log();

const produtos = [
  { nome: "Suco de laranja", preco: 4.5, tipo: "Bebida" },
  { nome: "Bife", preco: 4.5, tipo: "Comida" },
  { nome: "Linguiça frita", preco: 3.5, tipo: "Comida" },
  { nome: "Pizza", preco: 10.5, tipo: "Comida" },
  { nome: "Carne de vaca", preco: 5.5, tipo: "Comida" },
  { nome: "Pastel", preco: 9, tipo: "Comida" },
  { nome: "Coca", preco: 8.5, tipo: "Bebida" },
];

const produtosFiltrados = produtos.filter(
  (produto) => produto.preco < 10 && produto.tipo !== "Bebida"
);

console.log(produtosFiltrados);
