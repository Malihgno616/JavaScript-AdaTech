const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const dados = await response.json();
    console.log(dados);
  } catch (err) {
    console.error("Erro!!!! ", err);
  } finally {
    console.log("Fim da requisição");
  }
};

getUsers();