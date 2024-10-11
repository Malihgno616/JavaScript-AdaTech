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

const createUser = async (newUser) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    // Verifica se a resposta foi bem sucedida
    if (!response.ok) {
      throw new Error("Erro ao criar usuário");
    }

    // converte para JSON
    const createdUser = await response.json();
    console.log("Usuário criado com sucesso!", createdUser);
    return createUser;
  } catch (err) {
    console.error("Erro ao criar usuário", err);
  } finally {
    console.log("Fim da requisição");
  }
};

const newUser = {
  name: "João",
  username: "joao1234",
  email: "joao@gmail.com",
  address: {
    street: "Rua 1",
    city: "Sao Pauli",
    zipCode: "12345",
  },
  phone: "1234-1234",
  website: "joao.com",
};

// chamada da função para criar o usuário
createUser(newUser);
