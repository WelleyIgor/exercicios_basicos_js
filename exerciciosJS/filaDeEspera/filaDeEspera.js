let fila = [];
let opcao = "";

do {
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "º - " + fila[i] + "\n";
  }

  opcao = prompt(
    "Pacientes:\n" +
      pacientes +
      "\nEscolha uma ação:\n1 - Novo paciente\n2 - Remover Paciente\n3 - Sair"
  );

  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Qual o nome do novo paciente?");
      fila.push(novoPaciente);
      break;
    case "2":
      const consultaPaciente = fila.shift();
      if (!consultaPaciente) {
        alert("Não há nenhum paciente aguardando na fila!");
      } else {
        alert(consultaPaciente + " foi removido da fila");
      }
      break;
    case "3":
      alert("Encerrando programa...");
      break;
    default:
      alert(
        "Opção Inválida. \n Serão aceitos apenas umas das opções mostradas na tela como válidas (1, 2 ou 3)"
      );
      break;
  }
} while (opcao !== "3");
