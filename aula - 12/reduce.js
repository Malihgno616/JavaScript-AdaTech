// REDUCE

const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, elemento, _, arrayCompleto) => {
  return elemento / arrayCompleto.length + acumulador;
}, 0);

console.log(soma); // 15

const somaDosPares = numeros.reduce((acumulador, numero) => {
  if (numero % 2 === 0) {
    return acumulador + numero;
  } else {
    return acumulador;
  }
}, 0);

console.clear();
console.log(somaDosPares); // 6

// * Total a pagar do carrinho

const carrinho = [
  { produto: "feijão", preco: 7.98, quantidade: 3 },
  { produto: "arroz", preco: 5.49, quantidade: 2 },
  { produto: "macarrão", preco: 3.99, quantidade: 1 },
];

const totalAPagar = carrinho.reduce((acumulador, item) => {
  return item.preco * item.quantidade + acumulador;
}, 0);

console.clear();
console.log(totalAPagar); // 33.92
