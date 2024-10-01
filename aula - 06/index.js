// Utiliza sempre Camel case no JavaScript

// JavaScript possui tipagem dinâmica: infere os tipos de dados
// JavaScript possui uma tipagem fraca

var nomeDoEstagiario = "Ackin Maiochi"; // string (texto): Utiliza smepre aspas
var idadeDoEstagiario = 20; //number
var altura = 1.77; //number
var estudando = false; //boolean (booleano: verdadeiro ou falso)

console.log(nomeDoEstagiario);
console.log(typeof nomeDoEstagiario); // Tipo da variável
console.log(idadeDoEstagiario, typeof idadeDoEstagiario);
console.log(altura, typeof altura);
console.log(estudando, typeof estudando);

var semConteudo; // declarando uma variável

console.log(semConteudo); // undefined

var curso = "Front-end em React",
  topico = "Javascript Básico I";

console.log(curso, topico);

// Outras formas de declarar variaveis alem do var e são melhores:
// !Não utilize o var nos seus códigos JavaScript

let notaDoAluno = 10; //Podemos alterar a variável
const mediaDoAluno = 8; //É uma constante, não sendo mutável

notaDoAluno = 9;
// ! mediaDoAluno = 8; NÃO É PERMITIDO 

console.log(notaDoAluno);
console.log(mediaDoAluno);

