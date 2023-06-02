const personagem1 = prompt("Insira o Nome do Combatente 1");
const poderAtaque = prompt("Insira o Poder de Ataque do Combatente 1");
const valorAtaque = parseFloat(poderAtaque);

const personagem2 = prompt("Insira o Nome do Combatente 2");

const vida = prompt("Insira o valor de VIDA do Combatente 2");
const valorVida = parseFloat(vida);

const defesa = prompt("Insira o valor de DEFESA do Combatente 2");
const valorDef = parseFloat(defesa);

const escudo = prompt("Possui Escudo? Responda apenas SIM ou NAO");
let dano = 0;

if (valorAtaque < valorDef) {
  alert(personagem1 + " Não deu dano algum em " + personagem2);
} else if (valorAtaque > defesa && escudo === "sim") {
  dano = (valorAtaque - valorDef) / 2;
} else if (valorAtaque > valorDef && escudo === "nao") {
  dano = valorAtaque - valorDef;
}

let vidaFaltante = valorVida - dano;

alert(
  personagem1 +
    " Deu " +
    dano +
    " de dano no " +
    personagem2 +
    "\n" +
    personagem2 +
    " ficou com " +
    vidaFaltante +
    " de vida restante"
);
alert(
  "Nome Atacante: \n" +
    personagem1 +
    "\n Valor de Ataque: " +
    valorAtaque +
    "\n\n\n" +
    "Nome do Defensor: \n" +
    personagem2 +
    "\n Valor de vida Restante: " +
    vidaFaltante +
    "\n Poder de Defesa: " +
    valorDef +
    "\n Possui escudo? " +
    escudo
);
