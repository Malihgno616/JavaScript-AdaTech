// Object Literal

const array = ["Ackin", 27, 1.77, true];

const pessoa = {
  nome: "Ackin",
  idade: 20,
  altura: 1.77,
  eProgramador: true,
  hobbies: ["Jogar LoL", "Academia", "skate"],
  imprimirAlgo: () => {
    console.log("Chamou a função");
  },
};

console.log(pessoa);
console.clear();

console.log(pessoa.nome);
console.log(pessoa.hobbies);
console.log(pessoa["idade"]);

pessoa.profissao = "Desenvolvedor";

console.log(pessoa);

pessoa.nome = "Ackin Maiochi";

console.log(pessoa);

delete pessoa.altura;
console.log(pessoa);

console.clear();

pessoa.imprimirAlgo();

const idade = 27;
const altura = 1.77;

const objeto = {
  idade,
  altura,
};

console.log(objeto);

const { nome, hobbies } = pessoa;

console.log(nome);
console.log(hobbies);
console.log(pessoa);

function funcao(array) {
  let acc = 0;

  for (let elemento of array) {
    acc += elemento;
  }

  return acc / array.length;
}

console.log(funcao([4, 6, 4, 2]));