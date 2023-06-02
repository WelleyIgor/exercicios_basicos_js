// CADASTRO DE RECRUTAS

/* const primeiroNome = prompt("Insira seu Primeiro Nome: ");
const sobrenome = prompt("Insira seu sobrenome: ");
const campoEstudo = prompt("insira seu campo de estudo: ");
const anoNascimento = prompt("Qual seu ano de nascimento?");

anoNascimento = 2023 - anoNascimento;

alert(
  primeiroNome +
    " " +
    sobrenome +
    "\n" +
    "Campo de estudo: " +
    campoEstudo +
    "\n" +
    "idade: " +
    anoNascimento
);
*/
// CALCULADORA BÁSICA

const entrada1 = prompt("Insira um primeiro numero:");
const entrada2 = prompt("insira um segundo numero: ");

const num1 = parseFloat(entrada1);
const num2 = parseFloat(entrada2);

const numSoma = num1 + num2;
const numSub = num1 - num2;
const numMult = num1 * num2;
const numDiv = num1 / num2;

alert(
  "Os valores das operações foram: \n" +
    "Soma: " +
    numSoma +
    "\n" +
    "Subtração: " +
    numSub +
    "\n" +
    "Multiplicação: " +
    numMult +
    "\n" +
    "Divisão: " +
    numDiv
);
