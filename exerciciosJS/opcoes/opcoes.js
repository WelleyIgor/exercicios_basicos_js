let opcao = "";

do {
  opcao = prompt(
    "Digite uma opção dentre as 5: " +
      "\na) Opção A" +
      "\nb) Opção B" +
      "\nc) Opção C" +
      "\nd) Opção D" +
      "\ne) Sair"
  );
  switch (opcao) {
    case "a":
      alert("Voce escolheu a opção A");
      break;
    case "b":
      alert("Voce escolheu a opção B");
      break;
    case "c":
      alert("Voce escolheu a opção C");
      break;
    case "d":
      alert("Voce escolheu a opção D");
      break;
    case "e":
      alert("Encerrando o Programa...");
      break;
    default:
      alert("entrada invalida");
  }
} while (opcao !== "e");
