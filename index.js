const prompt = require('prompt-sync');
const entrada = prompt();

var senha = entrada("Digite a senha: ");

while (senha != "2024") {
  console.log("Acesso negado");
  senha = entrada("Digite a senha: ");
}

console.log("Acesso permitido");