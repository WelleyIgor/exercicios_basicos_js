const metros = parseFloat(prompt("Insira um Valor em Metros:"));
const medida = prompt(
  "Escolha uma unidade de Medida: \n-milímitro(mm)\n-centímetro(cm)\n-decímetro(dm)\n-decâmetro(dam)\n-hectômetro(hm)\n-quilômetro(km)\nINSIRA APENAS AS UNIDADES!!"
);
let calculoMedida = 0;

switch (medida) {
  case "mm":
    calculoMedida = metros * 1000;
    alert("o valor de Metros para milímitro é " + calculoMedida + "mm");
    break;
  case "cm":
    calculoMedida = metros * 100;
    alert("o valor de Metros para centímetro é " + calculoMedida + "cm");
    break;
  case "dm":
    calculoMedida = metros * 10;
    alert("o valor de Metros para decímetro é " + calculoMedida + "dm");
    break;
  case "dam":
    calculoMedida = metros / 10;
    alert("o valor de Metros para decâmetro é " + calculoMedida + "dam");
    break;
  case "hm":
    calculoMedida = metros / 100;
    alert("o valor de Metros para hectômetro é " + calculoMedida + "hm");
    break;
  case "km":
    calculoMedida = metros / 1000;
    alert("o valor de Metros para quilômetro é " + calculoMedida + "km");
    break;
  default:
    alert("Unidade de medida Invalida.");
}
