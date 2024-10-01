// Operações Booleanos: Comparação
// == compara o valor , === compara o valor e o tipo,
// != Se os valores são diferentes, !== Se os valores e os tipos são diferentes
// > maior que
// < menor que
// >= maior o igual
// <= menor ou igual
// ! negação
// && e
// || ou

const numero1 = 10;
const numero2 = 12;

console.log(numero1 == numero2);
console.log(numero1 === numero2);
console.log(numero1 == "10");

console.log(numero1 != "10");

const idadePessoa1 = 14;
const idadePessoa2 = 24;

console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18);
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18);

console.log(!true);

console.log(!(idadePessoa1 >= 18)); // retorna verdadeiro se a pessoa for menor de idade
