let saldo;
// undefined

do {
  saldo = Number(prompt.question("Qual é o seu saldo?: "));
} while (saldo < 0);

console.log(saldo);