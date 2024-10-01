// Muito útil quando sua variável possui valores específios

const permissoes = "aluno"; // 'aluno' || 'professor' || 'admin'

switch (permissoes) {
  case "aluno":
    console.log("Você só pode visualizar as aulas.");
    break;
  case "professor":
    console.log("Você pode alterar as aulas e adicionar exercícios.");
    break;
  case "admin":
    console.log("Você tem acesso total ao sistema.");
    break;
  default:
    console.log("Não sei quem você é no sistema");
}
