const imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Bem vindo ao Cadastramento de Imoveis." +
      "\nNumero de Imoveis cadastrados: " +
      imoveis.length +
      "\n\nEscolha umas das opções: \n1 - Novo Imovel. \n2- Listagem de Imoveis Cadastrados. \n3- Sair"
  );
  switch (opcao) {
    case "1":
      const imovel = {};

      imovel.proprietario = prompt("Informe o nome do proprietario");
      imovel.quartos = parseFloat(prompt("Informe a quantidade de quartos"));
      imovel.banheiros = parseFloat(
        prompt("Informe a quantidade de banheiros")
      );
      imovel.garagem = prompt("O imovel possui garagem (Sim/Não)");

      const salvar = confirm(
        "Salvar este Imovel?" +
          "\nNome do proprietário: " +
          imovel.proprietario +
          "\nQuantidade de Quartos: " +
          imovel.quartos +
          "\nQuantidade de Banheiros: " +
          imovel.banheiros +
          "\nPossui garagem?: " +
          imovel.garagem
      );

      if (salvar) {
        imoveis.push(imovel);
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imovel" +
            (i + 1) +
            "\nNome do proprietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nPossui Garagem?: " +
            imoveis[i].garagem
        );
      }

      break;
    case "3":
      alert("Encerrando programa!");
      break;
    default:
      alert("Opção Invalida.");
      break;
  }
} while (opcao !== "3");
