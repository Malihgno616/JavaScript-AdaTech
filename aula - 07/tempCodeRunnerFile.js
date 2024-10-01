const permissoes = "admin"; // 'aluno' || 'professor' || 'admin'

switch (permissoes) {
  case "aluno":
    console.log("Você só pode visualizar as aulas.");
  case "professor":
    console.log("Você pode alterar as aulas e adicionar exercícios.");
  case "admin":
    console.log("Você tem acesso total ao sistema.");
  default:
    console.log("Não sei quem você é no sistema");
}
