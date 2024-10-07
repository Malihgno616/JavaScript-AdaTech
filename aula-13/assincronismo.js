const fs = require("fs");

// * 1. Callbacks

console.log("Antes da função de ler o arquivo...");

// Função assíncrona (ler um arquivo leva um tempo)
fs.readFile("aula-13/arquivo.txt", (erro, conteudoDoArquivo) => {
  if (erro) {
    console.log("Ocorreu um erro ao tentar ler o arquivo:", erro);
  } else {
    console.log(String(conteudoDoArquivo));
  }
});

console.log("Depois da função de ler o arquivo...");

// Exemplo 02: setTimeout (função que cria um timer)
console.log("Antes do setTimeout()");

setTimeout(() => {
  console.log("Isso aqui vai ser executado após 2 segundos!");
}, 2 * 1000);

console.log("Depois do setTimeout()");

// * 2. Promises (promessas)

// Uma promessa é uma função que pode ou não ser resolvida
const fs = require("fs");

console.log("Antes da criação da criação");

function lerArquivoDoPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("aula-13/arquivo.txt", (erro, conteudoDoArquivo) => {
      if (erro) {
        reject("Ocorreu um erro ao tentar ler o arquivo:", erro);
      } else {
        resolve(String(conteudoDoArquivo));
      }
    });
  });
}

// Foco a partir daqui...
lerArquivoDoPromise()
  .then((retornoDoResolveDoPromise) => {
    console.log("Deu certo: ", retornoDoResolveDoPromise);
  })
  .catch((erro) => {
    console.log("Deu ruim: ", erro);
  })
  .finally(() => {
    console.log("Fim da execução da promessa");
  });

// * 3. Async/Await

async function leituraDeDados() {
  console.log("Antes de ser executada");

  try {
    const dadosDoArquivoLido = await lerArquivoDoPromise(); // espera a promessa ser resolvida para avançar no código
    console.log(dadosDoArquivoLido);
    console.log("Depois de ser executada");
  } catch (err) {
    console.log("Isso aqui é executado depois da promise (com erro).");
  } finally {
    console.log("Fim da execução da função");
  }
}

leituraDeDados();
