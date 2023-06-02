const carro1 = prompt("Insira O nome do PRIMEIRO Carro:");
const velocidade1 = prompt("Insira a velocidade do PRIMEIRO Carro:");
const carro2 = prompt("Insira o nome do SEGUNDO Carro:");
const velocidade2 = prompt("Insira a velocidade do SEGUNDO carro");

if (velocidade1 > velocidade2) {
  alert(carro1 + " é mais rapido que o " + carro2);
} else if (velocidade1 < velocidade2) {
  alert(carro2 + " é mais rapido que o " + carro1);
} else if (velocidade1 == velocidade2) {
  alert(carro1 + " e " + carro2 + " possuem a mesma velocidade");
}
