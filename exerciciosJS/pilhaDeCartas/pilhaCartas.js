const cartas = [];
let opcoes = "";

do {
  opcoes = prompt(
    "Cartas no baralho: " +
      cartas.length +
      "\n\nEscolha uma opção." +
      "\n1 - Adicionar nova Carta. \n2 - Remover Carta. \n3 - Sair"
  );

  switch (opcoes) {
    case "1":
      const novaCarta = prompt("Qual a nova carta que irá adicionar?");
      cartas.push(novaCarta);
      break;
    case "2":
      const removeCarta = cartas.pop();
      if (!removeCarta) {
        alert("Não existe carta para ser removida.");
      } else {
        alert("Você puxou um " + removeCarta);
      }
      break;
    case "3":
      alert("Saindo do Programa!!");
      break;
    default:
      alert(
        "Opção Invalida, insira apenas umas das opções válidas (1, 2 ou 3)"
      );
  }
} while (opcoes !== "3");
