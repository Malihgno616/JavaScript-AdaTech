"use strict";
console.log("Aula 19");
// classe: abstração
// Definindo a abstração de uma pessoa
class Pessoa {
    // métodos: ação (funções)
    // Método construtor
    constructor(nome, idade, altura, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._cpf = cpf;
    }
    dormir() {
        console.log("Zzz...");
    }
    // acessor: getter
    get cpf() {
        return this._cpf;
    }
    // acessor: setter
    set cpf(newCpf) {
        if (newCpf.length !== 14) {
            // ! lançando um erro
            throw new Error("CPF inválido");
        }
        this._cpf = newCpf;
    }
}
class Professor extends Pessoa {
    constructor(nome, idade, altura, cpf, codigo) {
        super(nome, idade, altura, cpf);
        this.codigo = codigo;
    }
    ensinar() {
        console.log("Ensinando...");
    }
}
// Criando/instanciando uma pessoa (individuo/objeto) a partir da definição da classe Pessoa
const pessoa1 = new Pessoa("Ackin", 20, 1.77, "123-456-789-100");
console.log(pessoa1.cpf);
console.log(pessoa1.nome);
pessoa1.dormir();
pessoa1.cpf = "123-456-789-10";
console.log(pessoa1.cpf); // 123-456-789-101
// Objeto da Classe Professor
const professor = new Professor("Professor", 50, 1.67, "123-123-123-10", "0001");
console.log(professor);
professor.dormir();
professor.ensinar();
// Polimorismo
console.log(pessoa1 instanceof Pessoa); // true
console.log(pessoa1 instanceof Professor); // false
console.log(professor instanceof Professor); // true
console.log(professor instanceof Pessoa); // true
