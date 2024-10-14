"use strict";
let numero = 20; // Inferencia de Tipo
const pi = 3.1416;
let nome = "Ackin";
let correta = false;
let resultado = numero * pi;
const numeros = [1, 2, 3, 4, 5]; // array de number
const nomes = ["João", "Maria", "Pedro", "Anaa"]; // array de string
// Array<number> ou number[]
const misto = ["Ackin", 12, 1.76]; // Unindo dois tipos de variaveis em um array (ñ recomendado)
const idades = [];
idades.push(23);
idades.push(33);
idades.push(13);
idades.push(15);
idades.push(53);
const menorDeIdade = idades.filter((idade) => idade < 18);
console.log(menorDeIdade);
for (const idade of idades) {
    console.log(idade);
}
const pessoaTupla = ["Ackin", 27]; //tuplas
const pessoa = {
    nome: "ackin",
    idade: 20,
    profissao: "estagiário",
    altura: 1.77,
};
const pessoa1 = {
    nome: "Joelma",
    idade: 25,
    profissao: "Desenvolvedora",
    altura: 1.65,
};
console.log(pessoa);
function chooseNumber(num1, num2, criteria) {
    switch (criteria) {
        case "greater":
            return num1 > num2 ? num1 : num2;
        case "lower":
            return num1 < num2 ? num1 : num2;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio >= 0.5)
                return num1;
            return num2;
    }
}
const numeroEscolhido = chooseNumber(10, 20);
console.log("numero escolhido", numeroEscolhido);
function somar(num1, num2) {
    return num1 + num2;
}
const outraPessoa = {};
const pessoas = {
    "123.345.555-00": {
        nome: "João",
        idade: 20,
        altura: 1.8,
        profissao: "Desenvolvedor",
    },
    "123.345.555-01": {
        nome: "Jose",
        idade: 20,
        altura: 1.8,
        profissao: "Desenvolvedor",
    }
};
