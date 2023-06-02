const turista = prompt("Digite seu nome turista:");
let cidades = "";
let contagemCidades = 0;

let continuar = prompt(turista + " Você visitou alguma cidade? (Sim/Não)");

while (continuar === "Sim") {
  let cidade = prompt("Qual a cidade que você visitou?");
  // O simbolo += junta nesse caso o nome da cidade mais o que esta dentro da variavel cidades
  cidades += " - " + cidade + "\n";
  contagemCidades++;
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)");
}

alert(
  "\n" +
    turista +
    "\nVocê visitou: " +
    contagemCidades +
    "cidades" +
    "\nAs quais foram: \n" +
    cidades
);
