const numeroInicial = parseFloat(
  prompt("Digite um Numero para o programa fazer a Multiplicação de 1 a 20:")
);
let calculo = "";

for (let fator = 1; fator <= 20; fator++) {
  calculo +=
    "=" + numeroInicial + " x " + fator + " = " + numeroInicial * fator + "\n";
}

console.log("Resultado Final da tabuada do " + numeroInicial + ":\n" + calculo);
