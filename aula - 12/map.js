// Map: Cria um novo array que possui o mesmo tamanho do array original
// composto pelos elementos que foram retornador a cada iteração

const numeros = [40, 230, 12, 56, 65, 16, 10];

const novoArray = numeros.map((elemento) => {
  return elemento * 2;
});

console.log(novoArray);

// Exemplo 1: Elevando todos os números ao quadrado
console.clear();

const valores = [40, 230, 12, 56, 65, 16, 10];

const valoresAoQuadrado = valores.map((valor) => {
  return valor ** 2;
});

console.log(valoresAoQuadrado);

// Exemplo 2: Adicionando uma propriedade aos objetos do array
console.clear();

const carrinho = [
  { produto: "feijão", preco: 7.98, quantidade: 3 },
  { produto: "arroz", preco: 5.5, quantidade: 2 },
  { produto: "macarrão", preco: 7.5, quantidade: 1 },
];

const carrinhoComTotal = carrinho.map((itemDoCarrinho) => {
  return {
    ...itemDoCarrinho, // Joga dentro do objeto
    total: itemDoCarrinho.preco * itemDoCarrinho.quantidade,
  };
});
console.log(carrinhoComTotal);

// const pessoa = {
//   nome: "João",
//   idade: 30,
//   altura: 1.76,
// };

// Desestruturação ou spread(operator)
// const pessoaComPeso = {
//   ...pessoa,
//   peso: 70,
// };

// console.log(pessoaComPeso);
