const prompt = require("readline-sync");

const idade = Number(prompt.question("Qual é a sua idade?: "));

const maiorDeIdade = idade >= 18;

// const maiorDeIdade = idade >= 18;
// Estrutura condicional: if/else

if (maiorDeIdade) {
  //faça alguma coisa...
  console.log("Você é maior de idade!");
} else {
  //faça outra coisa...
  console.log("Você é menor de idade!");
}

const mediaDoAluno = 7.8;
//  media >= 7 => Aprovado
//  media < 7 e media >= 5 >= Prova Final
//  media < 5 => Reprovado

if (mediaDoAluno >= 7) {
  console.log("Aprovado");
  console.log("Parabéns!!!");
} else if (mediaDoAluno >= 5) {
  console.log("Prova Final!!!");
} else {
  console.log("Reprovado");
}

// 1. Preciso ser maior de idade
// 2. Preciso ter uma CHN (PPD)

const idadePessoa = 18;
const temCNH = true;

if (idadePessoa >= 18 && temCNH) {
  console.log("Pode pegar a carteira de motorista");
} else {
  console.log("Não pode pegar a carteira de motorista");
}
