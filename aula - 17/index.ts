let numero = 20; // Inferencia de Tipo

const pi = 3.1416;

let nome: string = "Ackin";

let correta: boolean = false;

let resultado = numero * pi;

const numeros: number[] = [1, 2, 3, 4, 5]; // array de number
const nomes: string[] = ["João", "Maria", "Pedro", "Anaa"]; // array de string

// Array<number> ou number[]

const misto: (number | string)[] = ["Ackin", 12, 1.76]; // Unindo dois tipos de variaveis em um array (ñ recomendado)

const idades: number[] = [];

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

const pessoaTupla: [string, number] = ["Ackin", 27]; //tuplas

// Object Types

// interface
// tipo customizado
interface Person {
  nome: string;
  idade: number;
  profissao: string;
  altura: number;
}

const pessoa: Person = {
  nome: "ackin",
  idade: 20,
  profissao: "estagiário",
  altura: 1.77,
};

const pessoa1: Person = {
  nome: "Joelma",
  idade: 25,
  profissao: "Desenvolvedora",
  altura: 1.65,
};

console.log(pessoa);

// type

type Persona = {
  nome: string;
  idade: number;
  profissao?: string;
  altura: number;
};

// type aliases
type Criterio = "greater" | "lower";

function chooseNumber(num1: number, num2: number, criteria?: Criterio) {
  switch (criteria) {
    case "greater":
      return num1 > num2 ? num1 : num2;
    case "lower":
      return num1 < num2 ? num1 : num2;
    default:
      const numeroAleatorio = Math.random();
      if (numeroAleatorio >= 0.5) return num1;
      return num2;
  }
}

const numeroEscolhido = chooseNumber(10, 20);

console.log("numero escolhido", numeroEscolhido);

function somar(num1: number, num2: number): number {
  return num1 + num2;
}

//* Utility Types: A ideia é permitir que crie novos tipos a partir de tipos já existentes

// 1. Partial

type PersonPartial = Partial<Person>;

const outraPessoa: PersonPartial = {};

// 2. Required

type PersonRequired = Required<Person>;

// 3. Pick

type PersonPicked = Pick<Person, "nome" | "idade">;

// 4. Omit

type PersonOmit = Omit<Person, "profissao">;

// 5. Exclude

type CriterioExcluido = Exclude<Criterio, "greater">;

// 6. Record

type Pessoas = Record<string, Person>;

const pessoas: Pessoas = {
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
