let valorFinal = parseFloat(
  prompt("Olá, Quanto de dinheiro quer inserir na maquina?")
);
let valorSub = 0;
let valorSoma = 0;

let opcao = "";

do {
  opcao = prompt(
    "Você possui: " +
      valorFinal +
      "R$" +
      "\n O que deseja fazer agora?" +
      "\n A) Inserir Dinheiro?" +
      "\n B) Remover Dinheiro? " +
      "\n C) Sair"
  );

  switch (opcao) {
    case "a":
      valorSoma = parseFloat(prompt("Quanto deseja inserir?"));
      valorFinal = valorFinal + valorSoma;
      break;
    case "b":
      valorSub = parseFloat(prompt("Quanto deseja retirar?"));
      valorFinal = valorFinal - valorSub;
      break;
    case "c":
      alert("Ok, Até mais...");
      break;
    default:
      alert("Opcação invalida!!!!");
  }
} while (opcao !== "c");
