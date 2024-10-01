const prompt = require("readline-sync");

// Exemplo 1

// let saldo = Number(prompt.question("Qual é o seu saldo?: "));

// while (saldo <= 0) {
//   saldo = Number(
//     prompt.question("Saldo inválido! Por favor, informe novamente:  ")
//   );
// }

// console.log(saldo);

// Exemplo 2

// let notaDoAluno = Number(prompt.question("Informe a nota do aluno: "));

// let somaDasNotas = 0; // Acumulador
// let qtdNotasValidas = 0; // Acumulador (Quantidade de notas válidas digitadas)

// while (notaDoAluno >= 0) {
//   somaDasNotas += notaDoAluno; //Incrementando o acumulador (somaDasNotas)
//   qtdNotasValidas++; //Incrementa + 1 a ela, pós-incremento

//   notaDoAluno = Number(prompt.question("informe a próxima nota: "));
// }

// console.log(somaDasNotas);
// console.log(qtdNotasValidas);

// console.log("Média das notas dos alunos = ", somaDasNotas / qtdNotasValidas);

// Exemplo 3

// Math.random() => entre 0 e 1
// const numeroAleatorio = parseInt(Math.random() * 10); // 0.46789 * 10 = 4

// let quantidateDeTentativas = 0;

// let numeroDoUsuario = Number(
//   prompt.question("Informe um número entre 0 e 10: ")
// );

// console.log(numeroAleatorio);

// while (numeroAleatorio !== numeroDoUsuario) {
//   console.log("Você errou o número! Tente novamente...");
//   numeroDoUsuario = Number(prompt.question("Informe um número entre 0 e 10: "));
// }

// console.log("Parabéns! Você acertou! O número era", numeroAleatorio);

// Loop com contador

// let contador = 0;

// while (contador < 5) {
//   console.log(contador);
//   contador++;

//   if (contador == 2) {
//     continue;
//   }

//   console.log("Depois do if...")

// }

// * DO-WHILE

// Exemplo 1

let saldo;
// undefined

do {
  saldo = Number(prompt.question("Informe um saldo válido: "));
} while (saldo < 0);

console.log(saldo);
