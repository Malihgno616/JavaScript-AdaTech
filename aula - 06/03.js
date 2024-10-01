const prompt = require("readline-sync");

const idade = prompt.question("Qual é a sua idade?: ");

const idadeNumber = Number(idade);

// Coerção explícita (Conversão Manual)

console.log(idadeNumber, typeof idadeNumber);

console.log(Number("X")); //!NaN = Not a Number

console.log(String(10), typeof String(10));

console.log(Boolean(-1), typeof Boolean(-1));

// Coerção implícita

console.log(1 + "1"); // 11
console.log("10" + 5); // 105
console.log(10 - "5"); // 5
console.log(10 * "5"); // 50

let n = 1 + "1"; // 11 (string)

n = n - 1; // 11 - 1 = 10

console.log(n);

// Qual será a saída desse código?
console.log(2 + 3 + 4 + "5"); // 95 formato de string

// Qual será a saída desse código?
console.log("5" + 2 + 3 + 4); // 5234 em formato de string

// Qual será a saída desse código?
console.log('10' - '4' - '3' - 2 + '5'); // 15 em formato de string
